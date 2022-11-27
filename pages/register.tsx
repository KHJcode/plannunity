import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RegisterFormContainer from "../src/components/login_register/RegisterFormContainer";
import RegisterSuccessContainer from "../src/components/login_register/RegisterSuccessContainer";
import RegisterAuthContainer from "../src/components/login_register/ReigsterAuthContainer";

export default function RegisterPage() {
  const [visible, setVisible] = useState([false, false, false]);
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem("name")) {
      router.replace("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>플래뮤니티 | 회원가입</title>
      </Head>
      <div style={{ "height": "100vh", "touchAction": "none" }}>
        <RegisterSuccessContainer visible={visible} setVisible={setVisible} />
        <RegisterAuthContainer visible={visible} setVisible={setVisible} />
        <RegisterFormContainer visible={visible} setVisible={setVisible} />
      </div>
    </>
  );
}