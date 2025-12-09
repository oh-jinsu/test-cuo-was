import {
  JWTManager,
  PasswordRecoveryService,
} from "dn-react-toolkit/auth/server";
import { SITE_NAME, SITE_ORIGIN } from "~/app.config";
import { authRepository } from "./auth_repository";

export const passwordRecoveryService = new PasswordRecoveryService({
  siteName: SITE_NAME,
  siteOrigin: SITE_ORIGIN,
  authRepository,
  passwordRecoveryTokenManager: new JWTManager({
    secret: process.env.REFRESH_TOKEN_SECRET!,
    expiresIn: "1h",
  }),
  emailCredentials: {
    service: process.env.EMAIL_SERVICE!,
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});
