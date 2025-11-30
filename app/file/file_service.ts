import { FileService } from "dn-react-router-toolkit/file/file_service";
import { objectStorage } from "./object_storage";
import { fileRepository } from "./file_repository";

export const fileService = new FileService({
  fileRepository,
  objectStorage,
});
