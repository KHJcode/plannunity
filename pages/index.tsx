import Head from 'next/head'
import CarouselContainer from '../src/containers/CarouselContainer';
import styles from '../styles/Page.module.css'
import RankedPlanContainer from '../src/containers/RankedPlanContainer';
import PartyListContainer from '../src/containers/PartyListContainer';
import PlanListWithConditionContainer from '../src/containers/PlanListWithConditionContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPage } from '../src/modules/currentPage';

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("home"));
  }, []);
  return (
    <>
      <Head>
        <title>플래뮤니티 | 홈</title>
      </Head>
      <div className={styles.container}>
        <CarouselContainer />
        <PlanListWithConditionContainer title='커뮤니티 추천 플랜' />
        <PlanListWithConditionContainer title='회원님께 추천드리는 플랜' />
        <RankedPlanContainer />
        <PartyListContainer title='지금 파티 참가하기' />
      </div>
    </>
  );
}
