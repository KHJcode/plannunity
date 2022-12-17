import styled from "styled-components";
import PlanThumbnail from "../templates/PlanThumbnail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export default function RecentCreatedPlanByFriendList() {
  return (
    <Container>
      <PlanThumbnail styleOption="friend" />
      <PlanThumbnail styleOption="friend" />
      <PlanThumbnail styleOption="friend" />
    </Container>
  );
}