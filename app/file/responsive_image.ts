import { createResponsiveImage, type ResponsiveImageProps } from "dn-react-router-toolkit/file-kit/responsive_image";
import { cdn } from "./cdn";
import type React from "react";

export const ResponsiveImage: React.FC<ResponsiveImageProps> = createResponsiveImage(cdn);
