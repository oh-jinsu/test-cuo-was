import { createWithAuthHandler } from "dn-react-router-toolkit/auth";
import { authService } from "./auth_service";
import { type LoaderFunctionArgs } from "react-router";

export const withAuthLoader = createWithAuthHandler<LoaderFunctionArgs>({
  authService,
});

export const withAuthAction = createWithAuthHandler<LoaderFunctionArgs>({
  authService,
});
