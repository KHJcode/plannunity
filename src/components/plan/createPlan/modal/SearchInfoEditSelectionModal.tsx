import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../modules";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import { setActive, unsetActive } from "../../../../modules/isActive";
import { clickLink, deleteLink } from "../../../../modules/linkInfo";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  padding: 25px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const MainText = styled.div`
  font-size: 22px;
  line-height: 35px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
`;

const LinkItem = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  border: 1px solid #f6f6f6;
  border-radius: 15px;
`;

const LinkText = styled.div`
  font-size: 18px;
  line-height: 20px;
  flex: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function SearchInfoEditSelectionModal() {
  const { searchInfoEdit } = useSelector((state: RootState) => state.isActive);
  const links = useSelector((state: RootState) => state.linkInfo);
  const dispatch = useDispatch();

  const onClickCancelButton = () => {
    dispatch(unsetActive("searchInfoEdit"));
  };

  const onClickDeleteButton = (id: number) => {
    dispatch(deleteLink(id));
  };

  const onClickSubmitButton = () => {
    dispatch(unsetActive("searchInfoEdit"));
  };

  const onClickLink = (id: number) => {
    dispatch(clickLink(id));
    dispatch(setActive("searchInfoEditOne"));
    dispatch(unsetActive("searchInfoEdit"));
  }

  return (
    <Container isActive={searchInfoEdit}>
      <TopWrapper>
        <MainText>탐색 정보 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <LinkList>
        {links.map(link => (
          <LinkItem key={link.id}>
            <LinkText onClick={() => onClickLink(link.id)}>링크 {link.id + 1}</LinkText>
            <IconWrapper>
              <img src="images/cancel_gray.svg" onClick={() => onClickDeleteButton(link.id)} />
              <img src="images/hamburger_gray.svg" />
            </IconWrapper>
          </LinkItem>
        ))}
      </LinkList>
      <ButtonWrapper>
        <EditAndCreateButton
          text="수정 완료"
          btnColor="orange"
          onClick={onClickSubmitButton}
        />
      </ButtonWrapper>
    </Container>
  );
}
