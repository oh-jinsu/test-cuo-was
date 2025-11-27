import { createWithAuthHandler } from "dn-react-router-toolkit/auth-kit/with_auth";
import { JWT_MANAGER } from "./jwt_manager";
import { AUTH } from "./auth";
import { type LoaderFunctionArgs } from "react-router";

export const withAuthLoader = createWithAuthHandler<LoaderFunctionArgs>({
  JWT_MANAGER,
  AUTH,
});

export const withAuthAction = createWithAuthHandler<LoaderFunctionArgs>({
  JWT_MANAGER,
  AUTH,
});
