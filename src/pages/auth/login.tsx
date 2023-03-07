import React from "react";
import { SignInContextProvider } from "../../modules/auth/login/context";
import { SignInPage } from "../../modules/auth/login/page";

const LogIn = () => {
  return (
    <SignInContextProvider>
      <SignInPage />
    </SignInContextProvider>
  );
};

export default LogIn;
