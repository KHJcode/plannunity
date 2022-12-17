import styled from "styled-components";
import { PlanData } from "../../../pages";
import PlanThumbnail from "../templates/PlanThumbnail";

type RecentCreatedPlanByFriendListProps = {
  plans: PlanData[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export default function RecentCreatedPlanByFriendList({ plans }: RecentCreatedPlanByFriendListProps) {
  return (
    <Container>
      {plans.map((plan: PlanData) => (
        <PlanThumbnail styleOption="friend" plan={plan} key={plan.id} />
      ))}
    </Container>
  );
}