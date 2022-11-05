import styled from "styled-components";
import ParallelContentList from "../components/ParallelContentList";
import SecTitle from "../components/SecTitle";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`

const TitleWrapper = styled.div`
  padding-left: 20px;
`

export default function HighParticipationPlanContainer() {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text="참여율이 높은 플랜" />
      </TitleWrapper>
      <ParallelContentList />
    </Container>
  );
}