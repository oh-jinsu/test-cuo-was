import { createFileUploadButton } from "dn-react-toolkit/file/client";
import { fileUploader } from "~/file/file_uploader";

export const FileUploadButton = createFileUploadButton({
  uploadFile: (e) =>
    fileUploader.uploadFile(e, {
      convertToWebp: true,
    }),
});
