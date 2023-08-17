import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../../modules/isActive";
import CancelButton from "./CancelButton";

const Container = styled.div`
  height: 66px;
  width: 100%;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 13px 5px 13px 10px;
  display: flex;
  justify-content: space-between;
`

const LeftWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
`

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const NameText = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
`

export default function FriendListItem() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setActive("friendDetail"));
  }

  const onClickCancelButton = () => {
    dispatch(setActive("deleteFriend"));
  }

  return (
    <Container>
      <LeftWrapper onClick={onClick}>
        <ProfileImg src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg" />
        <NameText>나제원</NameText>
      </LeftWrapper>
      <CancelButton onClick={onClickCancelButton} />
    </Container>
  );
}