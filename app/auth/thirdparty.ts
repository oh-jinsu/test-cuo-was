import {
  GoogleAuth,
  AppleAuth,
  KakaoAuth,
  ThirdpartyAuthService,
  JWTManager,
  type ThirdpartySignupTokenPayload,
} from "dn-react-toolkit/auth/server";
import { authService } from "./auth_service";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "~/app.config";

export const signupTokenManager = new JWTManager<ThirdpartySignupTokenPayload>({
  secret: process.env.REFRESH_TOKEN_SECRET!,
  expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
});

const thirdpartyAuth = new ThirdpartyAuthService({
  authService,
  signupTokenManager,
});

export const getThirdPartyAuth = (provider: string) => {
  switch (provider) {
    case "google":
      return new GoogleAuth({
        thirdpartyAuth,
        googleClientId: GOOGLE_CLIENT_ID,
        googleRedirectUri: GOOGLE_REDIRECT_URI,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      });
    case "apple":
      return new AppleAuth({
        thirdpartyAuth,
        appleClientId: process.env.APPLE_CLIENT_ID!,
        appleTeamId: process.env.APPLE_TEAM_ID!,
        appleKeyId: process.env.APPLE_KEY_ID!,
        appleServiceId: process.env.APPLE_SERVICE_ID!,
        appleAuthKey: process.env.APPLE_AUTH_KEY!,
      });
    case "kakao":
      return new KakaoAuth({
        thirdpartyAuth,
      });
    default:
      throw new Error("지원하지 않는 로그인 방식입니다.");
  }
};
