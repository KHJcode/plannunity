import Head from "next/head";
import RecentPlanContainer from "../src/containers/RecentPlanContainer";
import SearchBarContainer from "../src/containers/SearchBarContainer";
import SearchWithCategoryContainer from "../src/containers/SearchWithCategoryContainer";
import styles from '../styles/Page.module.css'

export default function plan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 플랜</title>
      </Head>
      <SearchBarContainer />
      <RecentPlanContainer />
      <SearchWithCategoryContainer />
    </div>
  );
}