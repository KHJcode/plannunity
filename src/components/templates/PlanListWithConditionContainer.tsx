import styled from "styled-components";
import ParallelContentList from "./ParallelContentList";
import SecTitle from "./SecTitle";

type PlanListWithConditionContainerType = {
  title: string;
  plans: any;
}

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  padding-left: 20px;
`

export default function PlanListWithConditionContainer({ title, plans }: PlanListWithConditionContainerType) {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text={title} />
      </TitleWrapper>
      <ParallelContentList plans={plans} />
    </Container>
  );
}