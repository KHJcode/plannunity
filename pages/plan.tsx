import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlanListWithConditionContainer from "../src/components/templates/PlanListWithConditionContainer";
import RecentCreatedPlanContainer from "../src/components/plan/RecentCreatedPlanContainer";
import RecentSharedPlanContainer from "../src/components/plan/RecentSharedPlanContainer";
import SearchWithCategoryContainer from "../src/components/plan/SearchWithCategoryContainer";
import { setCurrentPage } from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";
import SchduleAddModalContainer from "../src/components/plan/createPlan/modal/SchduleAddModalContainer";
import SchduleEditSelectionModalContainer from "../src/components/plan/createPlan/modal/SchduleEditSelectionModalContainer";
import SchduleEditModalContainer from "../src/components/plan/createPlan/modal/SchduleEditModalContainer";
import BudgetAddModalContainer from "../src/components/plan/createPlan/modal/BudgetAddModalContainer";
import BudgetEditSelectionModalContainer from "../src/components/plan/createPlan/modal/BudgetEditSelectionModalContainer";
import SearchInfoAddModalContainer from "../src/components/plan/createPlan/modal/SearchInfoAddModalContainer";
import SearchInfoEditSelectionModalContainer from "../src/components/plan/createPlan/modal/SearchInfoEditSelectionModalContainer";
import SharePlanContainer from "../src/components/plan/sharePlan/SharePlanContainer";
import CreatePlanContainer from "../src/components/plan/createPlan/CreatePlanContainer";
import BudgetEditModalContainer from "../src/components/plan/createPlan/modal/BudgetEditModalContainer";
import { GetStaticProps } from "next";
import SearchInfoEditModalContainer from "../src/components/plan/createPlan/modal/SearchInfoEditModalContainer";
import { getAllData } from "../src/firebase/database";
import SearchPlaceModalContainer from "../src/components/plan/createPlan/modal/SearchPlaceModalContainer";
import SearchBar from "../src/components/templates/SearchBar";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const planData: any = await getAllData("plans");
  return {
    props: {
      planData
    }
  }
}

export default function PlanPage({ planData }: any) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onClickSearchButton = () => {
    console.log(search);
  }

  useEffect(() => {
    dispatch(setCurrentPage("plan"));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 플랜</title>
      </Head>
      <SearchBar searchType="plan" text={search} setText={setSearch} onClick={onClickSearchButton} /> 
      <RecentCreatedPlanContainer plan={planData[0]} />
      <RecentSharedPlanContainer plan={planData[0]} />
      <SearchWithCategoryContainer />
      <PlanListWithConditionContainer title="현재 인기 플랜" plans={planData} />
      <PlanListWithConditionContainer title="추천수가 높은 플랜" plans={planData} />
      <CreatePlanContainer />
      <SharePlanContainer />
      <SchduleAddModalContainer />
      <SchduleEditModalContainer />
      <SchduleEditSelectionModalContainer />
      <BudgetAddModalContainer />
      <BudgetEditModalContainer />
      <BudgetEditSelectionModalContainer />
      <SearchInfoAddModalContainer />
      <SearchInfoEditSelectionModalContainer />
      <SearchInfoEditModalContainer />
      <SearchPlaceModalContainer />
    </div>
  );
}
