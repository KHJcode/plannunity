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
import SchduleAddModalContainer from "../src/containers/SchduleAddModalContainer";
import SchduleEditSelectionModalContainer from "../src/containers/SchduleEditModalSelectionContainer";
import SchduleEditModalContainer from "../src/containers/SchduleEditModalSelectionContainer";
import BudgetAddModalContainer from "../src/containers/BudgetAddModalContainer";
import BudgetEditModalContainer from "../src/containers/BudgetEditModalContainer";
import SearchInfoAddModalContainer from "../src/containers/SearchInfoAddModalContainer";
import SearchInfoEditModalContainer from "../src/containers/SearchInfoEditModalContainer";
import SharePlanContainer from "../src/containers/SharePlanContainer";
import CreatePlanContainer from "../src/containers/CreatePlanContainer";

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
      <CreatePlanContainer />
      <SharePlanContainer />
      <SchduleAddModalContainer />
      <SchduleEditSelectionModalContainer />
      <SchduleEditModalContainer />
      <BudgetAddModalContainer />
      <BudgetEditModalContainer />
      <SearchInfoAddModalContainer />
      <SearchInfoEditModalContainer />
    </div>
  );
}
