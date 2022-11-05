import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px 0 20px;
`

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 30px;
`

const ProfileInfoLeftWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const ProfileImage = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 50%;
`

const ProfileTextWrapper = styled.div`
  display: flex;
  height: 71px;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`

const Name = styled.div`
  font-size: 20px;
  line-height: 25px;
`

const Email = styled.div`
  font-size: 15px;
  line-height: 19px;
  color: #747474
`

const StatInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const StatInfoBox = styled.div`
  flex: 1;
  height: 105px;
  border-radius: 12px;
  border: 1px solid #EDEDED;
  background: #F9F9F9;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 20px;
`

const Number = styled.div`
  font-size: 24px;  
  font-family: 'SUIT-700';
  color: #FF833E;
  line-height: 20px;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
`

const OptionItem = styled.div`
  width: 100%;
  height: 50px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
`

const RedText = styled.div`
  color: #FF2525;
`

export default function ProfileInfoContainer() {
  return (
    <Container>
      <ProfileInfoWrapper>
        <ProfileInfoLeftWrapper>
          <ProfileImage src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png" />
          <ProfileTextWrapper>
            <Name>나제원</Name>
            <Email>jewon.rha@gmail.com</Email>
          </ProfileTextWrapper>
        </ProfileInfoLeftWrapper>
        <img src="images/edit-3.svg" />
      </ProfileInfoWrapper>
      <StatInfoWrapper>
        <StatInfoBox>
          <Text>현재 보유하신<br />총 포인트 개수</Text>
          <Number>1,250P</Number>
        </StatInfoBox>
        <StatInfoBox>
          <Text>현재까지 받은<br />모든 추천 횟수</Text>
          <Number>25,680추천</Number>
        </StatInfoBox>
      </StatInfoWrapper>
      <OptionWrapper>
        <OptionItem>저장한 플랜 리스트 보기</OptionItem>
        <OptionItem>내가 만든 플랜 리스트 보기</OptionItem>
        <OptionItem>참가한 파티 리스트 보기</OptionItem>
        <OptionItem>계정 정보 설정 및 변경</OptionItem>
        <OptionItem><RedText>로그아웃하기</RedText></OptionItem>
      </OptionWrapper>
    </Container>
  );
}