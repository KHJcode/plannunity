import styled from "styled-components";
import OnlineFriendItem from "./OnlineFriendItem";

const Container = styled.div`
  display: flex;
  gap: 25px;
  overflow: scroll;
  padding: 0 20px;
`

export default function OnlineFriendList() {
  return (
    <Container>
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
      <OnlineFriendItem />
    </Container>
  );
}