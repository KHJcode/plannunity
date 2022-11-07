import Head from "next/head";
import styled from "styled-components";
import PlanDetailContainer from "../../src/containers/PlanDetailContainer";

const Container = styled.div`
  width: 100%;
`

export default function Plan() {
  return (
    <>
      <Head>
        <title>플랜 | [플랜 타이틀]</title>
      </Head>
      <Container>
        <PlanDetailContainer />
      </Container>
    </>
  );
}