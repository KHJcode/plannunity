import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";
import SchduleDetailModalContainer from "../../src/components/plan/planDetail/modal/SchduleDetailModalContainer";
import PlanDetailContainer from "../../src/components/plan/planDetail/PlanDetailContainer";
import { getData } from "../../src/firebase/database";

const Container = styled.div`
  width: 100%;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.planId;
  const planData = await getData("plans" ,String(id));
  console.log(planData);
  return {
    props: {
      planData
    }
  }
}

export default function Plan({ planData }: any) {
  return (
    <>
      <Head>
        <title>플랜 | [플랜 타이틀]</title>
      </Head>
      <Container>
        <PlanDetailContainer plan={planData} />
        <SchduleDetailModalContainer />
      </Container>
    </>
  );
}