import styled from "styled-components";
import ParallelContentItem from "./ParallelContentItem";

const Container = styled.div`
  overflow-x: scroll;
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 165px;
  width: fit-content;
`

export default function ParallelContentList() {
  return (
    <Container>
       <Wrapper>
        <ParallelContentItem />
        <ParallelContentItem />
        <ParallelContentItem />
        <ParallelContentItem />
      </Wrapper>
    </Container>
  );
}