import styled from "styled-components";

const Container = styled.div`
  width 100%;
  height: 282px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 166px;
  border-radius: 15px 15px 0 0;
`;

const BottomWrapper = styled.div`
  padding: 15px 15px 19px 15px;
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
`;

const Desc = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
`;

const LinkWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #6c6c6c;
`;

const Link = styled.span``;

const LinkTitle = styled.span``;

export default function InfoLink() {
  return (
    <Container>
      <Image src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png" />
      <BottomWrapper>
        <TextWrapper>
          <Title>관악산 등산 관련 꿀팁</Title>
          <Desc>관악산에서 등산을 할 때 매우 유용해요</Desc>
        </TextWrapper>
        <LinkWrapper>
          <Link>blog.naver.com | </Link>
          <LinkTitle>네이버 블로그</LinkTitle>
        </LinkWrapper>
      </BottomWrapper>
    </Container>
  );
}
