import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyPartyContainer from "../src/containers/MyPartyContainer";
import PartyListContainer from "../src/containers/PartyListContainer";
import SearchBarContainer from "../src/containers/SearchBarContainer";
import { setCurrentPage } from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";
import CreatePartyContainer from "../src/containers/CreatePartyContainer";

export default function PartyPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("party"));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 파티</title>
      </Head>
      <SearchBarContainer searchType="party" />
      <MyPartyContainer />
      <PartyListContainer title="현재 온라인인 파티" />
      <CreatePartyContainer />
    </div>
  );
}
