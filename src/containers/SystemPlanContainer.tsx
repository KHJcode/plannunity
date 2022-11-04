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


export default function SystemPlanContainer() {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text="회원님께 추천드리는 플랜" />
      </TitleWrapper>
      <ParallelContentList />
    </Container>
  );
}