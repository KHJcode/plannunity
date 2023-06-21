import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { LinkInfosState } from "../../modules/linkInfo";
import InfoLink from "./InfoLink";

type InfoLinkListProps = {
  linkData?: LinkInfosState;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReplaceBox = styled.div`
  width 100%;
  height: 117px;
  background: #F9F9F9;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  padding: 15px;
`;

const ReplaceText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #bfbfbf;
  font-family: "SUIT-400";
`;

export default function InfoLinkList({ linkData }: InfoLinkListProps) {
  const router = useRouter();
  const links = useSelector((state: RootState) => state.linkInfo);
  return router.pathname === "/plan" ? (
    links.length == 0 ? (
      <Container>
        <ReplaceBox>
          <ReplaceText>새로운 링크를 추가해보세요...</ReplaceText>
        </ReplaceBox>
      </Container>
    ) : (
      <Container>
        {links.map((link) => (
          <InfoLink key={link.id} link={link} />
        ))}
      </Container>
    )
  ) : (
    <Container>
      {linkData!.map((link) => (
        <InfoLink key={link.id} link={link} />
      ))}
    </Container>
  );
}
