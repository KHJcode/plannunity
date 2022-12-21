import styled from "styled-components";
import ParallelContentItem from "./ParallelContentItem";

type ParallelContentListType = {
  plans: any;
}

const Container = styled.div`
  overflow-x: scroll;
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 165px;
  width: fit-content;
`

export default function ParallelContentList({ plans }: ParallelContentListType) {
  return (
    <Container>
       <Wrapper>
        {plans.map((plan: any) => (
          <ParallelContentItem plan={plan} key={plan.id} />
        ))}
      </Wrapper>
    </Container>
  );
}