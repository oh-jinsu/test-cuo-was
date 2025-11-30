import { createResponsiveImage, type ResponsiveImageProps } from "dn-react-router-toolkit/file/responsive_image";
import type React from "react";
import { CDN_ORIGIN } from "~/app.config";

export const ResponsiveImage: React.FC<ResponsiveImageProps> = createResponsiveImage(
    { cdnOrigin: CDN_ORIGIN }
);
