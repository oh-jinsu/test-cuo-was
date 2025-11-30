import { createAPIHandler } from "dn-react-router-toolkit/route/api";
import { authService } from "./auth";
import { getThirdPartyAuth } from "./thirdparty";
import { fileService } from "../file/file_service";
import { passwordRecoveryService } from "./password_recovery_service";

export const authAPIHandler = createAPIHandler({
  authService,
  getThirdPartyAuth,
  passwordRecoveryService,
  fileService,
  signupTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
});
