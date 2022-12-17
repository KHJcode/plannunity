import styled from "styled-components";
import SecTitle from "../templates/SecTitle";
import OnlineFriendList from "./OnlineFriendList";
import SecRightOrangeText from "./SecRightOrangeText";

const Container = styled.div`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`

export default function OnlineFriendContainer() {
  return (
    <Container>
      <HeaderWrapper>
        <SecTitle text="현재 접속중인 친구" />
        <SecRightOrangeText text="6명" />
      </HeaderWrapper>
      <OnlineFriendList />

    </Container>
  );
}