import { CDN_ORIGIN } from "~/app.config";
import { createCDN } from "dn-react-router-toolkit/file";

export const cdn = createCDN(CDN_ORIGIN);
