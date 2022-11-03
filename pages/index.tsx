import Head from 'next/head'
import CarouselContainer from '../src/containers/CarouselContainer';
import styles from '../styles/Home.module.css'
import CommunityPlanContainer from '../src/containers/CommunityPlanContainer';
import SystemPlanContainer from '../src/containers/SystemPlanContainer';
import RankedPlanContainer from '../src/containers/RankedPlanContainer';
import PartyListContainer from '../src/containers/PartyListContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 홈</title>
      </Head>
      <div className={styles.container}>
        <CarouselContainer />
        <CommunityPlanContainer />
        <SystemPlanContainer />
        <RankedPlanContainer />
        <PartyListContainer />
      </div>
    </>
  );
}
