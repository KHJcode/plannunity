import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../modules/isActive";

const Container = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  border-radius: 15px;
  background: #F5F5F5;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const TopWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`

const TextWrapper = styled.div``

const SubText = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: rgba(147, 147, 147, 1);
`

const Title = styled.div`
  font-size: 16px;
`

const TagWrapper = styled.div``;

const Tag = styled.span`
  padding: 5px 12px;
  background: #FFE0CE;
  color: #FF7629;
  border-radius: 5px;
  font-size: 10px;
  line-height: 15px;
  margin-right: 5px;
`

const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const Number = styled.span`
  font-size: 13px;
  line-height: 15px;
`

const Strong = styled.span`
  color: #FF833E;
`

const Text = styled.span`
  padding: 0 0 0 7px;
  font-size: 13px;
  border-left: 1px solid #D2D2D2;
`

const UserImg = styled.img``;

export default function PartyItem() {
  const [width, setWidth] = useState<number>(0);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setActive("partyItem"))
  }
  
  useEffect(() => {
    setWidth(screen.width - 40);
  }, []);

  return (
    <Container width={width} onClick={onClick}>
      <TopWrapper>
        <ProfileImage src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png" />
        <TextWrapper>
          <SubText>나제원님의 파티</SubText>
          <Title>탈선린 같이 하실 분 구합니다</Title>
        </TextWrapper>
      </TopWrapper>
      <TagWrapper>
        <Tag>#뻘짓</Tag>
        <Tag>#지하철 정주행</Tag>
        <Tag>#경기도민</Tag>
      </TagWrapper>
      <BottomWrapper>
        <UserImg src="images/users_22.svg" />
        <Number>3/<Strong>2</Strong></Number>
        <Text>3명 중 <Strong>2명이 접속해있어요</Strong></Text>
      </BottomWrapper>
    </Container>
  );
}

