import Head from "next/head";
import { useEffect } from "react";
import LoginFormContainer from "../src/containers/LoginFormContainer";

export default function LoginPage() {

  return (
    <>
      <Head>
        <title>플래뮤니티 | 로그인</title>
      </Head>
      <LoginFormContainer />
    </>
  );
}
