import createFileUploadButton from "dn-react-router-toolkit/file/client/file_upload_button";
import { fileUploader } from "~/file/file_uploader";

export const FileUploadButton = createFileUploadButton({
  uploadFile: (e) =>
    fileUploader.uploadFile(e, {
      convertToWebp: true,
    }),
});
