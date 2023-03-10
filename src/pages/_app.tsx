import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { SignUpContextProvider } from "../modules/auth/signup/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SignUpContextProvider>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SignUpContextProvider>
    </>
  );
}
