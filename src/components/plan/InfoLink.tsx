import { useEffect, useState } from "react";
import styled from "styled-components";
import { LinkInfoState } from "../../modules/linkInfo";
import { Client } from "peekalink";

type InfoLinkProps = {
  link: LinkInfoState;
}

const Container = styled.div`
  width 100%;
  background: #F9F9F9;
  border: 1px solid #ededed;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 19px 15px;
  gap: 40px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`

const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 25px;
  color: #000000;
  max-height: 75px;
  overflow: hidden;
`;

const Desc = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
  overflow: hidden;
  max-height: 32px;
`;

const LinkWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #6c6c6c;
  max-height: 32px;
  overflow: hidden;
`;

const LinkText = styled.span`

`;

const LinkTitle = styled.span`

`;

interface PreviewData {
  title?: string;
  desc?: string;
  imgUrl?: string;
  domain?: string;
}
const client = new Client({ "apiKey": "1af5912c-2b02-4280-b320-ce870e4b92dd" });

const returnLinkPrivewData = async (link: string) => {
  const data = await client.preview(link);
  const previewData: PreviewData = {
    title: data.title,
    desc: data.description,
    imgUrl: data.image?.url,
    domain: data.domain,
  }
  return previewData;
}

export default function InfoLink({ link }: InfoLinkProps) {
  const [data, setData] = useState<PreviewData>({});

  useEffect(() => {
    (async () => {
      const data = await returnLinkPrivewData(link.link);
      setData(data);
    })();
  }, []);
  
  if(data.title) {
    return (
      <Container>
        <BottomWrapper>
          <TextWrapper>
            <Title>{data.title}</Title>
            <Desc>{data.desc}</Desc>
          </TextWrapper>
          <LinkWrapper>
            <LinkText>{data.domain} | </LinkText>
            <LinkTitle>{data.title}</LinkTitle>
          </LinkWrapper>
        </BottomWrapper>
      </Container>
    );
  } else {
    return <></>;
  }
}
