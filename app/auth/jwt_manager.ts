import { JWTManager } from "dn-react-router-toolkit/auth/server";
import { SITE_ORIGIN } from "~/app.config";

export const jwtManager = new JWTManager({
  siteOrigin: SITE_ORIGIN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN!,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN!,
});
