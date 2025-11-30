import { useState } from "react";
import { useAuth } from "dn-react-router-toolkit/auth/client/provider";

export default function Page() {
  const { requestResetPassword } = useAuth();

  const [isPending, setIsPending] = useState(false);

  const [sent, setSent] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsPending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    const result = await requestResetPassword(email);

    if (result) {
      setSent(email);
    }

    setIsPending(false);
  };

  return (
    <main className="p-4">
      {sent ? (
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">이메일 전송 완료</h1>
          <p>{sent}로 비밀번호 재설정 이메일을 전송했습니다.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">비밀번호 찾기</h1>
          <p className="mb-2">가입한 이메일을 입력해 주세요.</p>
          <input
            type="email"
            name="email"
            placeholder="abc@example.com"
            className="w-full"
          />
          <button
            type="submit"
            disabled={isPending}
            className="button-primary"
          >
            {isPending ? "전송 중..." : "비밀번호 재설정 이메일 보내기"}
          </button>
        </form>
      )}
    </main>
  );
}
