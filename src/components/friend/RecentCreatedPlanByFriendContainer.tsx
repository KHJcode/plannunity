import styled from "styled-components";
import SecTitle from "../templates/SecTitle";
import RecentCreatedPlanByFriendList from "./RecentCreatedPlanByFriendList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export default function RecentCreatedPlanByFriendContainer() {
  return (
    <Container>
      <SecTitle text="최근 친구가 제작한 플랜" />
      <RecentCreatedPlanByFriendList />
    </Container>
  );
}