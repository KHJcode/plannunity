import { useDispatch } from "react-redux";
import styled from "styled-components";
import { unsetActive } from "../../../../modules/isActive";

const Container = styled.div`
  background: #FFFFFF;
  padding: 25px 20px;
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const TitleText = styled.div`
  font-size: 22px;
  line-height: 35px;
`

const Img = styled.img`
  width: 100%;
  height: 166px;
  object-fit: cover;
  margin-bottom: 25px;
`

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Address = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #939393;
  font-family: 'SUIT-500';
`

const Desc = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #474747;
`

export default function SchduleDetailModal() {
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("schduleDetail"));
  }
  return (
    <Container>
      <TopWrapper>
        <TitleText>1. 관악산역 도착</TitleText>
        <img src="/images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <Img src="https://cdn.pixabay.com/photo/2022/12/12/12/58/dog-7651002_1280.jpg" />
      <DescWrapper>
        <Address>주소 서울특별시 관악구 신림동 211 관악산역</Address>
        <Desc>신림선을 통해 관악산역 1번 출구로 나옵니다.</Desc>
      </DescWrapper>
    </Container>
  );
}

