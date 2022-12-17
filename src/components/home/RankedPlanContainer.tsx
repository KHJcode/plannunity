import styled from "styled-components";
import RankingList from "./RankingList";
import SecTitle from "../templates/SecTitle";
import { PlanData } from "../../../pages";

type RankedPlanContainerProps = {
  plans: PlanData[];
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default function RankedPlanContainer({ plans }: RankedPlanContainerProps) {
  return (
    <Container>
      <SecTitle text="이번 달 TOP 3 플랜" />
      <RankingList plans={plans} />
    </Container>
  );
}