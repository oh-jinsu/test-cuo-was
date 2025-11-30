import { AuthService } from "dn-react-router-toolkit/auth/auth_service";
import { authRepository } from "./auth_repository";
import { jwtManager } from "./jwt_manager";
import { objectStorage } from "../file/object_storage";

export const authService = new AuthService({
  authRepository,
  jwtManager,
  objectStorage,
});
