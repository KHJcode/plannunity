import styled from "styled-components";
import RankingList from "./RankingList";
import SecTitle from "../templates/SecTitle";

type RankedPlanContainerProps = {
  plans: any;
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default function RankedPlanContainer({ plans }: RankedPlanContainerProps) {
  return (
    <Container>
      <SecTitle text="조회수 TOP 3 플랜" />
      <RankingList plans={plans} />
    </Container>
  );
}