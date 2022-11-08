import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import WelcomeContainer from "../src/containers/WelcomeContainer";

export default function WelcomePage() {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem("name")) {
      router.replace("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>플래뮤니티 | 당신의 여행을 플래뮤니티로 채우세요</title>
      </Head>
      <WelcomeContainer />
    </>
  );
}