import { SITE_ORIGIN } from "~/app.config";
import { configSEO } from "dn-react-router-toolkit/seo";

export const SEO = configSEO({
  origin: SITE_ORIGIN,
  siteName: "My Site",
  description: "This is my awesome site!",
});
