import styled from "styled-components";
import PartyItem from "./PartyItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default function PartyList() {
  return (
    <Container>
      <PartyItem />
      <PartyItem />
      <PartyItem />
    </Container>
  );
}