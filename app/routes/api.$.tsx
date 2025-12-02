import { createAPIHandler } from "dn-react-router-toolkit/api";
import { authService } from "~/auth/auth_service";
import { getThirdPartyAuth } from "~/auth/thirdparty";
import { fileService } from "~/file/file_service";
import { passwordRecoveryService } from "~/auth/password_recovery_service";

export const apiHandler = createAPIHandler({
  authService,
  getThirdPartyAuth,
  passwordRecoveryService,
  fileService,
  signupTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
});

export const loader = apiHandler;

export const action = apiHandler;
