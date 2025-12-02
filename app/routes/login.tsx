import { withAuthLoader } from "~/auth/with_auth";
import { createAdmin } from "~/auth/create_admin";
import { SEO } from "~/seo";
import { useAuth } from "dn-react-router-toolkit/auth/client";
import { Link, useNavigate } from "react-router";

export const meta = SEO.meta;

export const loader = withAuthLoader(() => async () => {
  await createAdmin();

  return {
    seo: SEO.init({
      title: "로그인",
      canonicalPath: "/login",
    }),
  };
});

export default function Home() {
  const navigate = useNavigate();

  const { login, loginWithGoogle } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <h1 className="text-3xl font-bold mb-8">로그인</h1>
      <form
        className="max-w-[300px] w-full"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const id = formData.get("id") as string;
          const password = formData.get("password") as string;

          try {
            await login(id, password);

            navigate("/");
          } catch (error) {
            alert(error instanceof Error ? error.message : "로그인 실패");
          }
        }}
      >
        <label>
          아이디
          <input name="id" type="text" />
        </label>
        <label>
          비밀번호
          <input name="password" type="password" />
        </label>
        <button className="button-primary my-2">로그인</button>
        <Link to="/signup" className="button-outline my-2">
          회원가입
        </Link>
        <div>
          <Link to="/forgot-password" className="mt-2 text-sm text-blue-600">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <div className="my-4 text-center text-sm">또는</div>
        <button
          type="button"
          className="button-outline my-2 "
          onClick={() => {
            loginWithGoogle();
          }}
        >
          구글로 로그인
        </button>
      </form>
    </div>
  );
}
