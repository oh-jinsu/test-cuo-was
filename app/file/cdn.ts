import { CDN_ORIGIN } from "~/app.config";
import { createCDN } from "dn-react-toolkit/file";

export const cdn = createCDN(CDN_ORIGIN);
