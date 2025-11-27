import { JWTManager } from "dn-react-router-toolkit/auth-kit/jwt";
import { SITE_ORIGIN } from "~/app.config";

export const JWT_MANAGER = new JWTManager(SITE_ORIGIN);
