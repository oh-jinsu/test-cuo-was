import { createUseDropFileInput } from "dn-react-router-toolkit/file/client";
import { fileUploader } from "~/file/file_uploader";

export const useDropFileInput = createUseDropFileInput({
  uploadFile: (e) => fileUploader.uploadFile(e),
});
