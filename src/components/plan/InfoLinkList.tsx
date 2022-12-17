import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { LinkInfosState } from "../../modules/linkInfo";
import InfoLink from "./InfoLink";

type InfoLinkListProps = {
  linkData?: LinkInfosState
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ReplaceBox = styled.div`
  width 100%;
  height: 282px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
`

export default function InfoLinkList({ linkData }: InfoLinkListProps) {
  const router = useRouter();
  const links = useSelector((state: RootState) => state.linkInfo);
  if(router.pathname === "/plan" && links.length == 0) {
    return (
      <Container>
        <ReplaceBox />
      </Container>
    ); 
  }
  if(router.pathname === "/plan") {
    return (
      <Container>
        {links.map(link => (
          <InfoLink key={link.id} link={link} />
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        {linkData?.map(link => (
          <InfoLink key={link.id} link={link} />
        ))}
      </Container>
    )
  }
}
