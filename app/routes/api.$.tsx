import { createAPIHandler } from "dn-react-router-toolkit/api";
import { authService } from "~/auth/auth_service";
import { getThirdPartyAuth, signupTokenManager } from "~/auth/thirdparty";
import { fileService } from "~/file/file_service";
import { passwordRecoveryService } from "~/auth/password_recovery_service";

export const apiHandler = createAPIHandler({
  authService,
  getThirdPartyAuth,
  passwordRecoveryService,
  fileService,
  signupTokenManager,
});

export const loader = apiHandler;

export const action = apiHandler;
