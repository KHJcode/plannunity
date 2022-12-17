import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../modules";
import { unsetActive } from "../../../modules/isActive";
import DeleteFriendModal from "./DeleteFriendModal";

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: ${props => props.isActive ? "rgba(40, 40, 40, 0.54)" : "#FFFFFF"};
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  z-index: ${props => props.isActive ? 1000 : -1};
`

export default function DeleteFriendModalContainer() {
  const { deleteFriend } = useSelector((state: RootState) => state.isActive);
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const dispatch = useDispatch();

  const onClickBackground = () => {
    if(!deleteButtonClicked) {
      dispatch(unsetActive("deleteFriend"));
    }
  }

  const onClickDeleteButton = () => {
    setDeleteButtonClicked(true);
    dispatch(unsetActive("deleteFriend"));
  }

  return (
    <Container isActive={deleteFriend} onClick={onClickBackground}>
      <DeleteFriendModal onClick={onClickDeleteButton} />
    </Container>
  );
}