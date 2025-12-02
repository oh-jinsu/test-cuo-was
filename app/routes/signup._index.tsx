import { useAuth } from "dn-react-router-toolkit/auth/client";
import {
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router";
import { jwtManager } from "~/auth/jwt_manager";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;

  const token = searchParams.get("token");

  if (!token) {
    return {};
  }

  const payload = await jwtManager.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET!
  );

  return payload;
};

export default function Page() {
  const navigate = useNavigate();

  const { signup } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <form
        className="max-w-[300px] w-full mx-auto"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          const passwordConfirm = formData.get("passwordConfirm") as string;

          try {
            await signup(email, password, passwordConfirm);

            navigate("/");
          } catch (error) {
            alert(
              error instanceof Error
                ? error.message
                : "회원가입 중 오류가 발생했습니다."
            );
          }
        }}
      >
        <h1 className="text-2xl font-semibold mb-4">회원가입</h1>
        <label>
          이메일
          <input type="email" name="email" />
        </label>
        <label>
          비밀번호
          <input type="password" name="password" />
        </label>
        <label>
          비밀번호 확인
          <input type="password" name="passwordConfirm" />
        </label>
        <button className="button-primary mt-4">회원가입</button>
      </form>
    </div>
  );
}
