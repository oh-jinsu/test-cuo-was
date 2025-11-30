import { createWithAuthHandler } from "dn-react-router-toolkit/auth/with_auth";
import { authService } from "./auth";
import { type LoaderFunctionArgs } from "react-router";

export const withAuthLoader = createWithAuthHandler<LoaderFunctionArgs>({
  authService,
});

export const withAuthAction = createWithAuthHandler<LoaderFunctionArgs>({
  authService,
});
