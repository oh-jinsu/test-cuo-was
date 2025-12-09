import { SEO } from "~/seo";
import { useAuth } from "dn-react-toolkit/auth/client";
import { Link } from "react-router";
import { withAuthLoader } from "~/auth/with_auth";

export const meta = SEO.meta;

export const loader = withAuthLoader(() => async () => {
  return {
    seo: SEO.init({
      canonicalPath: "/",
    }),
  };
});

export default function Home() {
  const { auth, logout } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {auth ? `Hello, ${auth.userId}!` : "Hello World!"}
      <Link to="/login">Login</Link>
      {auth && (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
