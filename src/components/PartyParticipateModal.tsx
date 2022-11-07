import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";

const Container = styled.div<{ isActive: boolean }>`
  padding: 20px;
  width: 100%;
  background: #ffffff;
  position: absolute;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
  transition: 0.5s;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px 10px 0;
`;

const HeadText = styled.div`
  color: #939393;
  font-size: 15px;
  line-height: 20px;
`;

const Profile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 20px;
`;

const PartyInfo = styled.div`
  width: 100%;
  height: fit-content;
  padding: 15px 12px;
  display: flex;
  gap: 20px;
  border: 1px solid #ededed;
  border-radius: 15px;
  background: #f9f9f9;
  margin-bottom: 25px;
`;

const LeftInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubTitle = styled.div`
  font-size: 15px;
  line-height: 19px;
`;

const Desc = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #848484;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 102px;
  background: #ff833e;
  color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export default function PartyParticipateModal() {
  const { partyItem } = useSelector((state: RootState) => state.isActive);
  const router = useRouter();
  const partyURL = `party/${1}`;
  const onClick = () => {
    router.push(partyURL);
  }
  return (
    <Container isActive={partyItem}>
      <TopWrapper>
        <HeadText>김도윤님의 파티</HeadText>
        <Profile src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png" />
      </TopWrapper>
      <Title>
        경기도 거주 중인 분들
        <br />
        저랑 같이 1호선 다 돌기 해보실 분
      </Title>
      <PartyInfo>
        <LeftInfoWrapper>
          <SubTitle>파티 정보</SubTitle>
          <Desc>지하철 타고 같이 경기도 맛집 투어해요!</Desc>
        </LeftInfoWrapper>
        <RightInfoWrapper>
          <SubTitle>참가 조건</SubTitle>
          <Desc>
            경기도 남부 거주자만 참가해주세요, 만 19세 이상부터 참가할 수 있어요
          </Desc>
        </RightInfoWrapper>
      </PartyInfo>
      <Button onClick={onClick}>파티 참가하기</Button>
    </Container>
  );
}
