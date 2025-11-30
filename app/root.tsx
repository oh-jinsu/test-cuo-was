import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { SEO } from "./seo";
import ClientEnv from "dn-react-router-toolkit/components/client_env";
import { withAuthLoader } from "./auth/with_auth";
import AuthProvider from "dn-react-router-toolkit/auth/client/provider";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "./app.config";

export const loader = withAuthLoader((a) => () => {
  return {
    ENV: {
      SITE_ORIGIN: process.env.SITE_ORIGIN,
      CDN_ORIGIN: process.env.CDN_ORIGIN,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    },
  };
})

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <ClientEnv />
      </body>
    </html>
  );
}

export default function App() {
  return <AuthProvider googleAuth={{
    googleClientId: GOOGLE_CLIENT_ID,
    googleRedirectUrl: GOOGLE_REDIRECT_URI,
  }}>
    <SEO.StructedData />
    <Outlet />
  </AuthProvider>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
