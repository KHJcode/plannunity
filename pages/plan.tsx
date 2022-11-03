import Head from "next/head";
import SearchBarContainer from "../src/containers/SearchBarContainer";
import styles from '../styles/Page.module.css'

export default function plan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 플랜</title>
      </Head>
      <SearchBarContainer />
    </div>
  );
}