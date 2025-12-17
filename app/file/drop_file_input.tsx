import { createUseDropFileInput } from "dn-react-toolkit/file/client";
import { fileUploader } from "~/file/file_uploader";

export const useDropFileInput = createUseDropFileInput({
    uploadFile: (e) => fileUploader.uploadFile(e),
    mapDefaultValue: (file) => {
        return {
            key: file.id,
            name: file.name,
            size: file.size,
            type: file.type,
            metadata: file.metadata,
            item: file,
        };
    },
});
