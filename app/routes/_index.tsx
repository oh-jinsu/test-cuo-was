import { withAuthLoader } from "~/auth/middleware";
import { GoogleLoginButton } from "dn-react-router-toolkit/auth-kit/client/google_login_button";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "~/app.config";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader = withAuthLoader(() => async ({ request }) => {
  return {};
});

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      Hello World!
      <GoogleLoginButton
        GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}
        GOOGLE_REDIRECT_URI={GOOGLE_REDIRECT_URI}
      />
    </div>
  );
}
