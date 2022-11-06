import Head from "next/head";
import ProfileInfoContainer from "../src/containers/ProfileContainer";

export default function PorfilePage() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 프로필</title>
      </Head>
      <ProfileInfoContainer />
    </>
  );
}