import Head from 'next/head'
import CarouselContainer from '../src/components/home/CarouselContainer';
import styles from '../styles/Page.module.css'
import RankedPlanContainer from '../src/components/home/RankedPlanContainer';
import PlanListWithConditionContainer from '../src/components/templates/PlanListWithConditionContainer';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCurrentPage } from '../src/modules/currentPage';
import { GetStaticProps } from 'next';
import { getAllPlans } from '../src/firebase/database';
import { SchdulesState } from '../src/modules/schdule';
import { LinkInfosState } from '../src/modules/linkInfo';
import { BudgetsState } from '../src/modules/budget';

export const getStaticProps: GetStaticProps = async () => {
  const planData: any = await getAllPlans();
  return {
    props: {
      planData
    }
  }
}

export interface PlanData {
  schdules: SchdulesState
  author: string
  infos: LinkInfosState
  planTitle: string
  budgets: BudgetsState
  id: string
}

export default function HomePage({ planData }: any) {
  const dispatch = useDispatch();
  const [logined, setLogined] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("name"))
    if(localStorage.getItem("name")) {
      setLogined(true);
    }
    dispatch(setCurrentPage("home"));
  }, []);
  return (
    <>
      {logined &&
        <>
          <Head>
            <title>플래뮤니티 | 홈</title>
          </Head>
          <div className={styles.container}>
            <CarouselContainer />
            <PlanListWithConditionContainer title='커뮤니티 추천 플랜' plans={planData} />
            <PlanListWithConditionContainer title='회원님께 추천드리는 플랜' plans={planData} />
            <RankedPlanContainer />
          </div>
        </>
      }
    </>
  )
}
