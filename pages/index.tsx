import Head from 'next/head'
import CarouselContainer from '../src/container/CarouselContainer';
import styles from '../styles/Home.module.css'
import CommunityPlanContainer from '../src/container/CommunityPlanContainer';
import SystemPlanContainer from '../src/container/SystemPlanContainer';
import RankedPlanContainer from '../src/container/RankedPlanContainer';
import PartyListContainer from '../src/container/PartyListContainer';

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
