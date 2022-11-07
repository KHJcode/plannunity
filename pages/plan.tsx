import Head from "next/head";
import PlanListWithConditionContainer from "../src/containers/PlanListWithConditionContainer";
import RecentPlanContainer from "../src/containers/RecentPlanContainer";
import SearchBarContainer from "../src/containers/SearchBarContainer";
import SearchWithCategoryContainer from "../src/containers/SearchWithCategoryContainer";
import styles from "../styles/Page.module.css";

export default function PlanPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 플랜</title>
      </Head>
      <SearchBarContainer searchType="plan" />
      <RecentPlanContainer />
      <SearchWithCategoryContainer />
      <PlanListWithConditionContainer title="현재 인기 플랜" />
      <PlanListWithConditionContainer title="참여율이 높은 플랜" />
    </div>
  );
}
