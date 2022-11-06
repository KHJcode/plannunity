import styled from "styled-components";
import MyPartyList from "../components/MyPartyList";
import SecTitle from "../components/SecTitle";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  padding-left: 20px;
`

export default function MyPartyContainer() {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text="현재 참가중인 파티" />
      </TitleWrapper>
      <MyPartyList />
    </Container>
  );
}