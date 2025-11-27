import { CDN_ORIGIN } from "~/app.config";
import { createCDN } from "dn-react-router-toolkit/file-kit/cdn";

export const cdn = createCDN(CDN_ORIGIN);
