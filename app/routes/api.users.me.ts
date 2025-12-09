import {
  CREATED,
  METHOD_NOT_ALLOWED,
  NO_CONTENT,
  OK,
  UNAUTHORIZED,
} from "dn-react-toolkit/http";
import { eq } from "drizzle-orm";
import { withAuthAction, withAuthLoader } from "~/auth/with_auth";
import { db, userTable } from "~/db";

export const loader = withAuthLoader((auth) => async () => {
  if (!auth) {
    return UNAUTHORIZED();
  }

  const user = await db.query.userTable.findFirst({
    where(t, { eq }) {
      return eq(t.id, auth.userId as string);
    },
    with: {
      profileImage: true,
    },
  });

  return OK(user);
});

export const action = withAuthAction((auth) => async ({ request }) => {
  if (!auth) {
    return UNAUTHORIZED();
  }

  switch (request.method) {
    case "PATCH": {
      const { ...props } = await request.json();

      const [user] = await db
        .update(userTable)
        .set({ ...props })
        .where(eq(userTable.id, auth.userId as string))
        .returning();

      return CREATED(user);
    }
    case "DELETE": {
      await db.delete(userTable).where(eq(userTable.id, auth.userId as string));

      return NO_CONTENT();
    }
    default:
      return METHOD_NOT_ALLOWED();
  }
});
