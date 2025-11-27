import { withAuthLoader } from "~/auth/with_auth";
import { GoogleLoginButton } from "dn-react-router-toolkit/auth-kit/client/google_login_button";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "~/app.config";
import { SEO } from "~/seo";
import { FileUploadButton } from "~/components/file_upload_button";

export const meta = SEO.meta;

export const loader = withAuthLoader(() => async () => {
  return {
    seo: SEO.init({
      canonicalPath: "/",
    }),
  };
});

export default function Home() {
  return (
    <div>
      Hello World!
      <GoogleLoginButton
        GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}
        GOOGLE_REDIRECT_URI={GOOGLE_REDIRECT_URI}
      />
      <FileUploadButton
        onUpload={(e) => {
          console.log(e);
        }}
      >
        업로드
      </FileUploadButton>
    </div>
  );
}
