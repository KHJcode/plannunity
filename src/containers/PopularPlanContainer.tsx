import styled from "styled-components";
import ParallelContentList from "../components/ParallelContentList";
import SecTitle from "../components/SecTitle";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  padding-left: 20px;
`

export default function PopularPlanContainer() {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text="현재 인기 플랜" />
      </TitleWrapper>
      <ParallelContentList />
    </Container>
  );
}