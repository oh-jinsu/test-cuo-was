import { type AuthRepository } from "dn-react-router-toolkit/auth-kit/repository";
import { db, fileTable, thirdpartyAuthTable, userTable } from "~/db";
import { eq } from "drizzle-orm";

export const authRepository: AuthRepository = {
  findUserById(id) {
    return db.query.userTable.findFirst({
      where(t, { eq }) {
        return eq(t.id, id);
      },
    });
  },
  findCredentialById(id) {
    return db.query.credentialTable.findFirst({
      where(t, { eq }) {
        return eq(t.id, id);
      },
    });
  },
  async updateUserRefreshToken(id, refreshToken) {
    await db
      .update(userTable)
      .set({ refreshToken })
      .where(eq(userTable.id, id));
  },
  async createUser(user) {
    const [result] = await db.insert(userTable).values(user).returning();

    return result;
  },
  async findThirdPartyAuth(provider, userId) {
    return db.query.thirdpartyAuthTable.findFirst({
      where(t, { and, eq }) {
        return and(eq(t.provider, provider), eq(t.id, userId));
      },
    });
  },
  async createThirdPartyAuth(thirdPartyAuth) {
    await db.insert(thirdpartyAuthTable).values(thirdPartyAuth);
  },
  async createFile(file) {
    await db.insert(fileTable).values(file).returning();
  },
};
