import styled from "styled-components";
import RankingItem from "./RankingItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default function RankingList() {
  return (
    <Container>
      <RankingItem />
      <RankingItem />
      <RankingItem />
    </Container>
  );
}