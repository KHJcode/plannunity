import styled from "styled-components";
import ParallelContentItem from "./ParallelContentItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  overflow: hidden;
`

export default function ParallelContentList() {
  return (
    <Container>
      <ParallelContentItem />
      <ParallelContentItem />
    </Container>
  );
}