import { type AuthRepository } from "dn-react-router-toolkit/auth/auth_repository";
import { credentialTable, db, thirdpartyAuthTable, userTable, type FileTableSelect } from "~/db";
import { eq } from "drizzle-orm";

export const authRepository: AuthRepository<FileTableSelect> = {
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
  async updatePassword(id, hashedPassword) {
    await db
      .update(credentialTable)
      .set({ password: hashedPassword })
      .where(eq(credentialTable.id, id));
  },
  async updateUserRefreshToken(id, refreshToken) {
    await db
      .update(userTable)
      .set({ refreshToken })
      .where(eq(userTable.id, id));
  },
  async createUser(user) {
    const [result] = await db.insert(userTable).values({
      ...user,
      profileImageId: user.profileImage?.id || null,
    }).returning();

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
  async createCredential(credential) {
    await db.insert(credentialTable).values(credential);
  }
};
