import Head from 'next/head'
import CarouselContainer from '../src/Container/CarouselContainer';
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'
import CommunityPlanContainer from '../src/Container/CommunityPlanContainer';
import SystemPlanContainer from '../src/Container/SystemPlanContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 홈</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <CarouselContainer />
        <CommunityPlanContainer />
        <SystemPlanContainer />
      </div>
    </>
  );
}
