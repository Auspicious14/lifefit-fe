import { Inter } from "next/font/google";
import { SignUpPage } from "../modules/auth/signup/page";
import { SignUpContextProvider } from "../modules/auth/signup/context";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <SignUpContextProvider>
        <SignUpPage />
      </SignUpContextProvider>
    </>
  );
};

export default Home;
