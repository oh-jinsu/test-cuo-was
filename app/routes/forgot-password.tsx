import { useState } from "react";
import { useAuth } from "dn-react-toolkit/auth/client";

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

        try {
            await requestResetPassword(email);

            setSent(email);
        } catch (e) {
            alert(
                e instanceof Error
                    ? e.message
                    : "알 수 없는 오류가 발생했습니다."
            );
        }

        setIsPending(false);
    };

    return (
        <main className="px-4">
            {sent ? (
                <div className="max-w-md mx-auto">
                    <h1 className="text-2xl font-semibold mb-4">
                        이메일 전송 완료
                    </h1>
                    <p>{sent}로 비밀번호 재설정 이메일을 전송했습니다.</p>
                </div>
            ) : (
                <form onSubmit={onSubmit} className="max-w-md mx-auto">
                    <h1 className="text-2xl font-semibold mt-8 mb-4">
                        비밀번호 찾기
                    </h1>
                    <p className="mb-8 text-neutral-400">
                        가입한 이메일로 비밀번호 재설정 링크를 보내드립니다.
                    </p>
                    <label>
                        가입한 이메일을 입력해 주세요.
                        <input
                            type="email"
                            name="email"
                            placeholder="abc@example.com"
                            className="input-form"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="button-primary mt-8 w-full"
                    >
                        {isPending
                            ? "전송 중..."
                            : "비밀번호 재설정 이메일 보내기"}
                    </button>
                </form>
            )}
        </main>
    );
}
