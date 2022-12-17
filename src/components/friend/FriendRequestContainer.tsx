import styled from "styled-components";
import SecTitle from "../templates/SecTitle";
import FriendRequestList from "./FriendRequestList";
import SecRightOrangeText from "./SecRightOrangeText";

const Container = styled.div`
  padding: 0 20px 20px 20px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function FriendRequestContainer() {
  return (
    <Container>
      <HeaderWrapper>
        <SecTitle text="친구 요청" />
        <SecRightOrangeText text="2건" />
      </HeaderWrapper>
      <FriendRequestList />
    </Container>
  );
}