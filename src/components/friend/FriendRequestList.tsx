import styled from "styled-components";
import FriendRequestItem from "./FriendRequestItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

export default function FriendRequestList() {
  return (
    <Container>
      <FriendRequestItem />
      <FriendRequestItem />
    </Container>
  );
}