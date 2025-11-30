import { db, fileTable, type FileTableSelect } from "~/db";
import type { FileRepository } from "dn-react-router-toolkit/file/file_repository";
import { eq } from "drizzle-orm";

export const fileRepository: FileRepository<FileTableSelect> = {
  async findFileById(fileId) {
    return db.query.fileTable.findFirst({
      where: (t, { eq }) => eq(t.id, fileId),
    });
  },
  hasPermission(file, userId) {
    return !file.userId || file.userId === userId;
  },
  async createFile(file) {
    const [result] = await db.insert(fileTable).values(file).returning();
    return result;
  },
  async deleteFile(fileId) {
    await db.delete(fileTable).where(eq(fileTable.id, fileId));
  },
};
