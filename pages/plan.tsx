import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlanListWithConditionContainer from "../src/containers/PlanListWithConditionContainer";
import RecentCreatedPlanContainer from "../src/containers/RecentCreatedPlanContainer";
import RecentSharedPlanContainer from "../src/containers/RecentSharedPlanContainer";
import SearchBarContainer from "../src/containers/SearchBarContainer";
import SearchWithCategoryContainer from "../src/containers/SearchWithCategoryContainer";
import { setCurrentPage } from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";

export default function PlanPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("plan"));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 플랜</title>
      </Head>
      <SearchBarContainer searchType="plan" />
      <RecentCreatedPlanContainer />
      <RecentSharedPlanContainer />
      <SearchWithCategoryContainer />
      <PlanListWithConditionContainer title="현재 인기 플랜" />
      <PlanListWithConditionContainer title="추천수가 높은 플랜" />
    </div>
  );
}
