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

export default function CommunityPlanContainer() {
  return (
    <Container>
      <TitleWrapper>
        <SecTitle text="커뮤니티 추천 플랜" />
      </TitleWrapper>
      <ParallelContentList />
    </Container>
  );
}