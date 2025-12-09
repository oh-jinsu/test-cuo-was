import { createResponsiveImage } from "dn-react-toolkit/file/client";
import { CDN_ORIGIN } from "~/app.config";

export const ResponsiveImage = createResponsiveImage({ cdnOrigin: CDN_ORIGIN });
