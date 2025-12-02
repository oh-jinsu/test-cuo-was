import { useAuth } from "dn-react-router-toolkit/auth/client";
import { useState } from "react";
import { useSearchParams } from "react-router";

export default function Page() {
  const { resetPassword } = useAuth();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token") || "";

  const [isPending, setIsPending] = useState(false);

  const [sent, setSent] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsPending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("confirmPassword") as string;

    try {
      await resetPassword(token, password, passwordConfirm);

      setSent("success");
    } catch (e) {
      alert(e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다.");
    }

    setIsPending(false);
  };

  return (
    <main className="p-4">
      {sent ? (
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">비밀번호 재설정 완료</h1>
          <p>비밀번호를 재설정했습니다. 다시 로그인해 주세요.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">비밀번호 재설정</h1>
          <p>새로운 비밀번호를 입력해 주세요.</p>
          <input
            type="password"
            name="password"
            className="border p-2 w-full mt-2 mb-4"
          />
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="confirmPassword"
            className="border p-2 w-full mt-2 mb-4"
          />
          <button
            type="submit"
            disabled={isPending}
            className="mt-2 bg-primary text-white w-full p-3"
          >
            {isPending ? "전송 중..." : "비밀번호 재설정"}
          </button>
        </form>
      )}
    </main>
  );
}
