import styled from "styled-components";
import PartyItem from "./PartyItem";

const Container = styled.div`
  overflow-x: scroll;
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 165px;
  width: fit-content;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }
`

export default function MyPartyList() {
  return (
    <Container>
      <Wrapper>
        <PartyItem />
        <PartyItem />
        <PartyItem />
      </Wrapper>
    </Container>
  );
}