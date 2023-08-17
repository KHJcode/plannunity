import Head from "next/head";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import PlanListWithConditionContainer from "../src/components/templates/PlanListWithConditionContainer";
import RecentCreatedPlanContainer from "../src/components/plan/RecentCreatedPlanContainer";
import RecentSharedPlanContainer from "../src/components/plan/RecentSharedPlanContainer";
import SearchWithCategoryContainer from "../src/components/plan/SearchWithCategoryContainer";
import {setCurrentPage} from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";
import SchduleAddModalContainer from "../src/components/plan/createPlan/modal/SchduleAddModalContainer";
import SchduleEditSelectionModalContainer
    from "../src/components/plan/createPlan/modal/SchduleEditSelectionModalContainer";
import SchduleEditModalContainer from "../src/components/plan/createPlan/modal/SchduleEditModalContainer";
import BudgetAddModalContainer from "../src/components/plan/createPlan/modal/BudgetAddModalContainer";
import BudgetEditSelectionModalContainer
    from "../src/components/plan/createPlan/modal/BudgetEditSelectionModalContainer";
import SearchInfoAddModalContainer from "../src/components/plan/createPlan/modal/SearchInfoAddModalContainer";
import SearchInfoEditSelectionModalContainer
    from "../src/components/plan/createPlan/modal/SearchInfoEditSelectionModalContainer";
import SharePlanContainer from "../src/components/plan/sharePlan/SharePlanContainer";
import CreatePlanContainer from "../src/components/plan/createPlan/CreatePlanContainer";
import BudgetEditModalContainer from "../src/components/plan/createPlan/modal/BudgetEditModalContainer";
import {GetServerSideProps, GetStaticProps} from "next";
import SearchInfoEditModalContainer from "../src/components/plan/createPlan/modal/SearchInfoEditModalContainer";
import {getAllData, getPlansByVisibility, planSort, searchPlans} from "../src/firebase/database";
import SearchPlaceModalContainer from "../src/components/plan/createPlan/modal/SearchPlaceModalContainer";
import SearchBar from "../src/components/templates/SearchBar";
import {useState} from "react";
import CategorySelectModalContainer from "../src/components/plan/createPlan/modal/CategorySelectModalContainer";
import TravelTermModalContainer from "../src/components/plan/createPlan/modal/TravelTermModalContainer";
import ShareTargetModalContainer from "../src/components/plan/sharePlan/modal/ShareTargetModalContainer";
import MassTransAccModalContainer from "../src/components/plan/sharePlan/modal/MassTransAccModalContainer";
import DifficultyModalContainer from "../src/components/plan/sharePlan/modal/DifficultyModalContainer";
import {SharedPlan} from "../src/firebase/schema";
import PlanThumbnail from "../src/components/templates/PlanThumbnail";
// import MyAllPlan from "../src/components/plan/PlanList/MyAllPlan";
// import MySharedPlan from "../src/components/plan/PlanList/MySharedPlan";

export const getStaticProps: GetStaticProps = async () => {
    const sharedPlanPromise = getPlansByVisibility("public");
    const createdPlanPromise = getPlansByVisibility("private");
    const [sharedPlan, createdPlan]: any = await Promise.all([sharedPlanPromise, createdPlanPromise]);

    const recentSharedPlan: any = sharedPlan.length ? sharedPlan[0] : null;
    const recentCreatedPlan: any = createdPlan.length ? createdPlan[0] : null;

    const highestThumbsPlan: any = planSort(sharedPlan, "hearts", "ascending");

    return {
        props: {
            recentSharedPlan,
            recentCreatedPlan,
            highestThumbsPlan
        }
    }
}

export default function PlanPage({recentSharedPlan, recentCreatedPlan, highestThumbsPlan}: any) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState<SharedPlan[]>([]);
    const [searchResultReturned, setSearchResultReturned] = useState(false);

    const onClickSearchButton = async () => {
        await searchPlans(search).then(data => {
            setSearchResult(data);
            setSearchResultReturned(true);
            setSearch("");
        });
    };

    useEffect(() => {
        dispatch(setCurrentPage("plan"));
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>플래뮤니티 | 플랜</title>
            </Head>
            <SearchBar searchType="plan" text={search} setText={setSearch} onClick={onClickSearchButton}/>
            {
                searchResultReturned
                    ?
                    <div style={{
                        "display": "flex",
                        "flexDirection": "column",
                        "gap": "10px",
                        "width": "100%",
                    }}>
                        {searchResult.map((plan: SharedPlan, idx: number) => (
                            <PlanThumbnail key={idx} styleOption="share" plan={plan}/>
                        ))}
                    </div>
                    :
                    <>
                        <RecentCreatedPlanContainer plan={recentCreatedPlan}/>
                        <RecentSharedPlanContainer plan={recentSharedPlan}/>
                        <SearchWithCategoryContainer/>
                        <PlanListWithConditionContainer title="저장수가 높은 플랜" plans={highestThumbsPlan}/>
                        <PlanListWithConditionContainer title="추천수가 높은 플랜" plans={highestThumbsPlan}/>
                    </>
            }
            <CreatePlanContainer/>
            <SharePlanContainer/>
            <SchduleAddModalContainer/>
            <SchduleEditModalContainer/>
            <SchduleEditSelectionModalContainer/>
            <BudgetAddModalContainer/>
            <BudgetEditModalContainer/>
            <BudgetEditSelectionModalContainer/>
            <SearchInfoAddModalContainer/>
            <SearchInfoEditSelectionModalContainer/>
            <SearchInfoEditModalContainer/>
            <SearchPlaceModalContainer/>
            <CategorySelectModalContainer/>
            <TravelTermModalContainer/>
            <ShareTargetModalContainer/>
            <MassTransAccModalContainer/>
            <DifficultyModalContainer/>
            {/* <MyAllPlan plans={recentCreatedPlan} />
      <MySharedPlan plans={recentSharedPlan} /> */}
        </div>
    );
}
