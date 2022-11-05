import styled from "styled-components";
import ParallelContentList from "../components/ParallelContentList";
import SecTitle from "../components/SecTitle";

type PlanListWithConditionContainerType = {
  title: string;
}

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  padding-left: 20px;
`

export default function PlanListWithConditionContainer({ title }: PlanListWithConditionContainerType) {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text={title} />
      </TitleWrapper>
      <ParallelContentList />
    </Container>
  );
}