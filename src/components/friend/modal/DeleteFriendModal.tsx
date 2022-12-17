import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../modules";

type DeleteFriendModalType = {
  onClick: () => void;
}

const Container = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  background: #FFFFFF;
  padding: 18px 15px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const Text = styled.div`
  font-size: 18px;
  line-height: 30px;
`

const DeleteButton = styled.button`
  width: 100%;
  height: 40x;
  border-radius: 12px;
  padding: 10px 20px;
  background: #FFDFDF;
  color: #FF3E3E;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  border: none;
`

export default function DeleteFriendModal({ onClick }: DeleteFriendModalType) {
  const { deleteFriend } = useSelector((state: RootState) => state.isActive);
  const [scrollLoc, setScrollLoc] = useState(0);
  useEffect(() => {
    if(deleteFriend) {
      setScrollLoc(window.scrollY);
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    } else {
      document.body.style.cssText = ``;
      window.scrollTo(0, scrollLoc);
    }
  }, [deleteFriend]);
  return (
    <Container>
      <Text>정말로 나제원님과의<br />친구 관계를 지우시겠어요?</Text>
      <DeleteButton onClick={onClick}>친구 관계를 삭제할께요</DeleteButton>
    </Container>
  );
}