import createFileUploadButton from "dn-react-router-toolkit/file-kit/client/file_upload_button";
import { FILE_UPLOADER } from "~/file/file_uploader";

export const FileUploadButton = createFileUploadButton({
  uploadFile: (e) =>
    FILE_UPLOADER.uploadFile(e, {
      convertToWebp: true,
    }),
});
