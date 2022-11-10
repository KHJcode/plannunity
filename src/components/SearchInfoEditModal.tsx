import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import EditAndCreateButton from "./EditAndCreateButton";
import { unsetActive } from "../modules/isActive";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  transition: 0.5s;
  padding: 25px;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
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
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function SearchInfoEditModal() {
  const { budgetAdd } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("searchInfoEdit"));
  };

  return (
    <Container isActive={budgetAdd}>
      <TopWrapper>
        <MainText>탐색 정보 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <LinkList>
        <LinkItem>
          <LinkText>링크 1</LinkText>
          <IconWrapper>
            <img src="images/cancel_gray.svg" />
            <img src="images/hamburger_gray.svg" />
          </IconWrapper>
        </LinkItem>
        <LinkItem>
          <LinkText>링크 2</LinkText>
          <IconWrapper>
            <img src="images/cancel_gray.svg" />
            <img src="images/hamburger_gray.svg" />
          </IconWrapper>
        </LinkItem>
        <LinkItem>
          <LinkText>링크 3</LinkText>
          <IconWrapper>
            <img src="images/cancel_gray.svg" />
            <img src="images/hamburger_gray.svg" />
          </IconWrapper>
        </LinkItem>
      </LinkList>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 수정 적용하기"
          btnColor="orange"
          onClick={() => {}}
        />
      </ButtonWrapper>
    </Container>
  );
}
