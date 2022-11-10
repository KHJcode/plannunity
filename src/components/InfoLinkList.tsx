import styled from "styled-components";
import InfoLink from "./InfoLink";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function InfoLinkList() {
  return (
    <Container>
      <InfoLink />
      <InfoLink />
    </Container>
  );
}
