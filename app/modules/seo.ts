import { SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN } from "~/app.config";
import { configSEO } from "dn-react-router-toolkit/seo-kit";

export const seo: Awaited<ReturnType<typeof configSEO>> = configSEO({
    origin: SITE_ORIGIN,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
})
