import styled from "styled-components";
import RankingItem from "./RankingItem";

type RankingListProps = {
  plans: any;
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
      {plans.map((plan: any, idx: number) => (
        <RankingItem plan={plan} key={plan.id} rank={idx + 1} />
      ))}
    </Container>
  );
}