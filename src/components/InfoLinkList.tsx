import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import InfoLink from "./InfoLink";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function InfoLinkList() {
  const links = useSelector((state: RootState) => state.linkInfo);
  return (
    <Container>
      {links.map(link => (
        <InfoLink key={link.id} />
      ))}
    </Container>
  );
}
