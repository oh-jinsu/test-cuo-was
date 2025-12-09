import { FileService } from "dn-react-toolkit/file/server";
import { objectStorage } from "./object_storage";
import { fileRepository } from "./file_repository";

export const fileService = new FileService({
  fileRepository,
  objectStorage,
});
