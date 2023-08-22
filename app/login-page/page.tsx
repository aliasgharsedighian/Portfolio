import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <>
      <h2 className="dark:text-gray-100">Log in</h2>
      <LoginForm />
      <span className="dark:text-gray-400">OR</span>
      <div className="login-btn-link">
        <div className="social-login-btn dark:bg-zinc-500">
          <img src="images/social/google-logo.png" alt="" />
          <p className="dark:text-gray-100">Continue with Google</p>
        </div>
        <div className="social-login-btn dark:bg-zinc-500">
          <img src="images/social/microsoft-logo.png" alt="" />
          <p className="dark:text-gray-100">Continue with Microsoft</p>
        </div>
        <div className="social-login-btn dark:bg-zinc-500">
          <img src="images/social/apple-logo.png" alt="" />
          <p className="dark:text-gray-100">Continue with Apple</p>
        </div>
      </div>
      <div className="info-login-page">
        <Link href="/sign-up">
          <p className="dark:text-gray-100">
            can not log in? Already have an account?
          </p>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
