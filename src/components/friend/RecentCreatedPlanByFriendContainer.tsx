import styled from "styled-components";
import { PlanData } from "../../../pages";
import SecTitle from "../templates/SecTitle";
import RecentCreatedPlanByFriendList from "./RecentCreatedPlanByFriendList";

type RecentCreatedPlanByFriendContainerProps = {
  plans: PlanData[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export default function RecentCreatedPlanByFriendContainer({ plans }: RecentCreatedPlanByFriendContainerProps) {
  return (
    <Container>
      <SecTitle text="최근 친구가 제작한 플랜" />
      <RecentCreatedPlanByFriendList plans={plans} />
    </Container>
  );
}