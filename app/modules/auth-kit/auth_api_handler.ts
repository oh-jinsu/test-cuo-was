import { createAuthAPIHandler } from "dn-react-router-toolkit/route/api";
import { AUTH } from "./auth";
import { APPLE_AUTH, GOOGLE_AUTH, KAKAO_AUTH } from "./thirdparty";
import { JWT_MANAGER } from "./jwt_manager";
import { FILE_SERVICE } from "../file-kit/file_service";
import { authRepository } from "./repository";
import { fileRepository } from "../file-kit/repository";
import { SITE_ORIGIN } from "~/app.config";

export const authAPIHandler = createAuthAPIHandler({
  SITE_ORIGIN,
  AUTH,
  GOOGLE_AUTH,
  APPLE_AUTH,
  KAKAO_AUTH,
  JWT_MANAGER,
  FILE_SERVICE,
  authRepository,
  fileRepository,
});
