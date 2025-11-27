import { AuthService } from "dn-react-router-toolkit/auth-kit/auth_service";
import { authRepository } from "./repository";
import { JWT_MANAGER } from "./jwt_manager";
import { OBJECT_STORAGE } from "./object_storage";

export const AUTH = new AuthService({
  repository: authRepository,
  JWT_MANAGER,
  OBJECT_STORAGE,
});
