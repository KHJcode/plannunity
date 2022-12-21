import Head from 'next/head'
import CarouselContainer from '../src/components/home/CarouselContainer';
import styles from '../styles/Page.module.css'
import RankedPlanContainer from '../src/components/home/RankedPlanContainer';
import PlanListWithConditionContainer from '../src/components/templates/PlanListWithConditionContainer';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCurrentPage } from '../src/modules/currentPage';
import { GetStaticProps } from 'next';
import { loadCart } from '../src/modules/cart';
import { getPlansByVisibility } from '../src/firebase/database';

export const getStaticProps: GetStaticProps = async () => {
  const sharedPlan: any = await getPlansByVisibility("public");
  return {
    props: {
      sharedPlan
    }
  }
}

export default function HomePage({ sharedPlan }: any) {
  const dispatch = useDispatch();
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("name"))
    if(localStorage.getItem("name")) {
      setLogined(true);
    }
    dispatch(setCurrentPage("home"));
    dispatch(loadCart(sharedPlan.slice(0, 4)));
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
            <PlanListWithConditionContainer title='추천수가 높은 플랜' plans={sharedPlan} />
            <PlanListWithConditionContainer title='회원님께 추천드리는 플랜' plans={sharedPlan} />
            <RankedPlanContainer plans={sharedPlan.slice(0, 3)} />
          </div>
        </>
      }
    </>
  )
}
