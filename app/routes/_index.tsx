import { SEO } from "~/seo";
import { useAuth } from "dn-react-router-toolkit/auth/client/provider";
import { Link } from "react-router";

export const meta = SEO.meta;

export const loader = async () => {
  return {
    seo: SEO.init({
      canonicalPath: "/",
    }),
  };
};

export default function Home() {
  const { auth, logout } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {auth ? `Hello, ${auth.userId}!` : "Hello World!"}
      <Link to="/login">Login</Link>
      {auth && <button onClick={() => {
        logout();
      }}>
        Logout
      </button>}
    </div>
  );
}
