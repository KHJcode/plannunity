import styled from "styled-components";
import ParallelContentList from "../components/ParallelContentList";
import RankingList from "../components/RankingList";
import SecTitle from "../components/SecTitle";

const Container = styled.div`
  padding: 20px;
`

export default function RankedPlanContainer() {
  return (
    <Container>
      <SecTitle text="이번 달 TOP 3 플랜" />
      <RankingList />
    </Container>
  );
}