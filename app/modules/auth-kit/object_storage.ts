import { ObjectStorage } from "dn-react-router-toolkit/file-kit/object_storage";

export const OBJECT_STORAGE = new ObjectStorage(
  process.env.AWS_S3_BUCKET_NAME!
);
