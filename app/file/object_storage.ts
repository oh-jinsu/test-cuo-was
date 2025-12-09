import { ObjectStorage } from "dn-react-toolkit/file/server";

export const objectStorage = new ObjectStorage({
  bucketName: process.env.AWS_S3_BUCKET_NAME!,
});
