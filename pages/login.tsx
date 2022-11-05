import Head from "next/head";
import LoginContainer from "../src/containers/LoginContainer";

export default function Login() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 로그인</title>
      </Head>
      <LoginContainer />
    </>
  );
}
