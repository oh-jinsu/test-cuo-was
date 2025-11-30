import { PasswordRecoveryService } from "dn-react-router-toolkit/auth/password_recovery";
import { SITE_NAME, SITE_ORIGIN } from "~/app.config";
import { authRepository } from "./auth_repository";
import { jwtManager } from "./jwt_manager";

export const passwordRecoveryService = new PasswordRecoveryService({
    siteName: SITE_NAME,
    siteOrigin: SITE_ORIGIN,
    authRepository,
    jwtManager,
    resetPasswordTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
    emailCredentials: {
        service: process.env.EMAIL_SERVICE!,
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
    }
})
