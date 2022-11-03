import styled from "styled-components";
import ParallelContentList from "../components/ParallelContentList";
import SecTitle from "../components/SecTitle";

const Container = styled.div`
  padding: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
`

export default function SystemPlanContainer() {
  return (
    <Container>
      <SecTitle text="회원님께 추천드리는 플랜" />
      <ParallelContentList />
    </Container>
  );
}