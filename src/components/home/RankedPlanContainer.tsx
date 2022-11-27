import styled from "styled-components";
import RankingList from "./RankingList";
import SecTitle from "../templates/SecTitle";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default function RankedPlanContainer() {
  return (
    <Container>
      <SecTitle text="이번 달 TOP 3 플랜" />
      <RankingList />
    </Container>
  );
}