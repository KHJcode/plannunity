import styled from "styled-components";
import SecTitle from "../templates/SecTitle";
import FriendList from "./FriendList";
import SecRightOrangeText from "./SecRightOrangeText";

const Container = styled.div`
  padding: 20px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function FriendListContainer() {
  return (
    <Container>
      <HeaderWrapper>
        <SecTitle text="총 친구 리스트" />
        <SecRightOrangeText text="총 8명" />
      </HeaderWrapper>
      <FriendList />
    </Container>
  );
}