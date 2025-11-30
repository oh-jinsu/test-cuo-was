import createUseDropFileInput from "dn-react-router-toolkit/file/client/drop_file_input";
import { fileUploader } from "~/file/file_uploader";

export const DropFileInput = createUseDropFileInput({
  uploadFile: (e) => fileUploader.uploadFile(e),
});
