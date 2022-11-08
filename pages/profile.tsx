import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProfileInfoContainer from "../src/containers/ProfileContainer";
import { setCurrentPage } from "../src/modules/currentPage";

export default function PorfilePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("profile"));
  }, []);
  return (
    <>
      <Head>
        <title>플래뮤니티 | 프로필</title>
      </Head>
      <ProfileInfoContainer />
    </>
  );
}