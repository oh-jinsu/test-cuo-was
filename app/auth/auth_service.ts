import { AuthService } from "dn-react-router-toolkit/auth/server";
import { authRepository } from "./auth_repository";
import { jwtManager } from "./jwt_manager";
import { objectStorage } from "../file/object_storage";
import { ReactRouterCookieStore } from "dn-react-router-toolkit/auth";

export const authService = new AuthService({
  authRepository,
  jwtManager,
  objectStorage,
  accessTokenCookieStore: new ReactRouterCookieStore("paychu_access_token"),
  refreshTokenCookieStore: new ReactRouterCookieStore("paychu_refresh_token"),
});
