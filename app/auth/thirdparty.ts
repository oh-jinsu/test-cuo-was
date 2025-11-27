import { GoogleAuth } from "dn-react-router-toolkit/auth-kit/google_auth";
import { AppleAuth } from "dn-react-router-toolkit/auth-kit/apple_auth";
import { AUTH } from "./auth";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "~/app.config";
import { KakaoAuth } from "dn-react-router-toolkit/auth-kit/kakao_auth";

export const GOOGLE_AUTH = new GoogleAuth(
  AUTH,
  GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET!,
  GOOGLE_REDIRECT_URI
);

export const APPLE_AUTH = new AppleAuth(AUTH);

export const KAKAO_AUTH = new KakaoAuth(AUTH);

export const getThirdPartyAuth = (provider: string) => {
  switch (provider) {
    case "google":
      return GOOGLE_AUTH;
    case "apple":
      return APPLE_AUTH;
    case "kakao":
      return KAKAO_AUTH;
    default:
      throw new Error("지원하지 않는 로그인 방식입니다.");
  }
};
