import { AuthService, JWTManager } from "dn-react-toolkit/auth/server";
import { authRepository } from "./auth_repository";
import { objectStorage } from "../file/object_storage";
import { ReactRouterCookieManager } from "dn-react-router-toolkit/auth";

export const authService = new AuthService({
  authRepository,
  accessTokenManager: new JWTManager({
    secret: process.env.ACCESS_TOKEN_SECRET!,
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  }),
  refreshTokenManager: new JWTManager({
    secret: process.env.REFRESH_TOKEN_SECRET!,
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  }),
  objectStorage,
  accessTokenCookieStore: new ReactRouterCookieManager("paychu_access_token"),
  refreshTokenCookieStore: new ReactRouterCookieManager("paychu_refresh_token"),
});
