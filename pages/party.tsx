import Head from "next/head";
import MyPartyContainer from "../src/containers/MyPartyContainer";
import PartyListContainer from "../src/containers/PartyListContainer";
import SearchBarContainer from "../src/containers/SearchBarContainer";
import styles from "../styles/Page.module.css";

export default function PartyPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 파티</title>
      </Head>
      <SearchBarContainer searchType="party" />
      <MyPartyContainer />
      <PartyListContainer title="현재 온라인인 파티" />
    </div>
  );
}
