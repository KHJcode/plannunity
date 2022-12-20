import styled from "styled-components";
import { PlanData } from "../../../pages";
import RankingItem from "./RankingItem";

type RankingListProps = {
  plans: PlanData[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 230px;
`

export default function RankingList({ plans }: RankingListProps) {
  return (
    <Container>
      {plans.map((plan: PlanData, idx: number) => (
        <RankingItem plan={plan} key={idx + 1} rank={idx + 1} />
      ))}
    </Container>
  );
}