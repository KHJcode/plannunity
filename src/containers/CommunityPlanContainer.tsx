import styled from "styled-components";
import ParallelContentList from "../components/ParallelContentList";
import SecTitle from "../components/SecTitle";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

export default function CommunityPlanContainer() {
  return (
    <Container>
      <SecTitle text="커뮤니티 추천 플랜" />
      <ParallelContentList />
    </Container>
  );
}