import { FileService } from "dn-react-router-toolkit/file-kit/file_service";
import { OBJECT_STORAGE } from "./object_storage";
import { fileRepository } from "./repository";

export const FILE_SERVICE = new FileService("dndnsoft", {
  repository: fileRepository,
  OBJECT_STORAGE,
});
