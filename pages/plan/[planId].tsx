import styled from "styled-components";
import PlanDetailContainer from "../../src/containers/PlanDetailContainer";

const Container = styled.div`
  width: 100%;
`

export default function Plan() {
  return (
    <Container>
      <PlanDetailContainer />
    </Container>
  );
}