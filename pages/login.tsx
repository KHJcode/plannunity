import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginFormContainer from "../src/components/login_register/LoginFormContainer";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem("name")) {
      router.replace("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>플래뮤니티 | 로그인</title>
      </Head>
      <LoginFormContainer />
    </>
  );
}
