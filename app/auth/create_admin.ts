import { v5 } from "uuid";
import { credentialTable, db, userTable } from "~/db";
import bcryptjs from "bcryptjs";

export const createAdmin = async () => {
  let admin = await db.query.userTable.findFirst({
    where: (t, { eq }) => eq(t.role, "admin"),
  });

  if (!admin) {
    const [user] = await db
      .insert(userTable)
      .values({
        id: v5("admin", v5.DNS),
        role: "admin",
      })
      .onConflictDoNothing()
      .returning();

    admin = user;
  }

  const password = bcryptjs.hashSync(process.env.ADMIN_PASSWORD || "1234", 10);

  await db
    .insert(credentialTable)
    .values({
      id: "admin",
      password,
      userId: admin!.id,
    })
    .onConflictDoUpdate({
      target: credentialTable.id,
      set: {
        password,
      },
    })
    .returning();
};
