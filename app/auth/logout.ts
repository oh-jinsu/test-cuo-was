import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();

  const logout = async () => {
    const ok = confirm("정말 로그아웃 하시겠습니까?");

    if (!ok) {
      return;
    }

    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      navigate("/");
    } else {
      const { message } = await res.json();

      alert(message);
    }
  };

  return logout;
}
