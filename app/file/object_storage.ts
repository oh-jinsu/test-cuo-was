import { ObjectStorage } from "dn-react-router-toolkit/file/object_storage";

export const objectStorage = new ObjectStorage(
  { bucketName: process.env.AWS_S3_BUCKET_NAME! }
);
