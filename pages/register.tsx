import Head from "next/head";
import RegisterFormContainer from "../src/containers/RegisterFormContainer";
import RegisterSuccessContainer from "../src/containers/RegisterSuccessContainer";
import RegisterAuthContainer from "../src/containers/ReigsterAuthContainer";

export default function Register() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 회원가입</title>
      </Head>
      <div style={{ "height": "100vh" }}>
        <RegisterSuccessContainer />
        <RegisterAuthContainer />
        <RegisterFormContainer />
      </div>
    </>
  );
}