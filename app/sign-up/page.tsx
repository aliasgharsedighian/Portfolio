import React from "react";
import SignUpForm from "./SignUpForm";
import FaceBookButton from "./FaceBookButton";

function SignUpPage() {
  return (
    <div className="sign-up-container dark:bg-zinc-600">
      <div className="sign-up-info">
        <h2 className="dark:text-gray-100">Join the community</h2>
        <p className="dark:text-gray-100">
          Take your art to the next level. get it seen by millions of people
        </p>
        <FaceBookButton />
        <span>Or</span>
      </div>
      <SignUpForm />
      <div className="sign-up-warn">
        <span className="dark:text-gray-100">
          By joining,you agree to our Terms Of Service and Privacy Policy.
        </span>
      </div>
    </div>
  );
}

export default SignUpPage;
