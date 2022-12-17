import styled from "styled-components";
import FriendListItem from "./FriendListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

export default function FriendList() {
  return (
    <Container>
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
    </Container>
  );
}