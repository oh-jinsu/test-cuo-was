import createUseDropFileInput from "dn-react-router-toolkit/file-kit/client/drop_file_input";
import { FILE_UPLOADER } from "~/file/file_uploader";

export const DropFileInput = createUseDropFileInput({
  uploadFile: (e) => FILE_UPLOADER.uploadFile(e),
});
