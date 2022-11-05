import Head from "next/head";
import WelcomeContainer from "../src/containers/WelcomeContainer";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 당신의 여행을 플래뮤니티로 채우세요</title>
      </Head>
      <WelcomeContainer />
    </>
  );
}