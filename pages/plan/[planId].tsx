import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";
import PlanDetailContainer from "../../src/containers/PlanDetailContainer";
import { getPlan } from "../../src/firebase/database";

const Container = styled.div`
  width: 100%;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.planId;
  const planData = await getPlan(String(id));
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
      </Container>
    </>
  );
}