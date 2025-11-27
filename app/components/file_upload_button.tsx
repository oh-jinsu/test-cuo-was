import { useRef } from "react";
import type { FileTableSelect } from "~/db";
import { FILE_UPLOADER } from "~/file/file_uploader";

type Props = {
  onUpload?: (files: FileTableSelect[]) => Promise<void> | void;
  children?: React.ReactNode;
};

export default function FileUploadButton({ onUpload, children }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (onUpload) {
        try {
          const entities = await Promise.all(
            Array.from(files).map((file) => FILE_UPLOADER.uploadFile(file))
          );

          await onUpload(entities);
        } catch (err) {
          console.error(err);
          alert("파일 업로드 중 오류가 발생했습니다.");
        }
      }
    }
    e.target.value = "";
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
