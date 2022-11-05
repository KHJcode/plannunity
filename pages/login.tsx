import Head from "next/head";
import LoginFormContainer from "../src/containers/LoginFormContainer";

export default function Login() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 로그인</title>
      </Head>
      <LoginFormContainer />
    </>
  );
}