import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import styled from "styled-components";
import PlanSchduleItem from "./PlanSchduleItem";
import EditAndCreateButton from "./EditAndCreateButton";
import { unsetActive } from "../modules/isActive";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
  transition: 0.5s;
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

const SchduleItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
`;

const SchduleItemWrapper = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 12px 19px;
  background: #f9f9f9;
  border: 1px solid #f6f6f6;
  border-radius: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100;
`;

export default function SchduleEditSelectionModal() {
  const { schduleEdit } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("schduleEdit"));
  };
  return (
    <Container isActive={schduleEdit}>
      <TopWrapper>
        <MainText>일정 정보 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <SchduleItemList>
        <SchduleItemWrapper>
          <PlanSchduleItem />
          <img src="images/hamburger.svg" />
        </SchduleItemWrapper>
        <SchduleItemWrapper>
          <PlanSchduleItem />
          <img src="images/hamburger.svg" />
        </SchduleItemWrapper>
        <SchduleItemWrapper>
          <PlanSchduleItem />
          <img src="images/hamburger.svg" />
        </SchduleItemWrapper>
      </SchduleItemList>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 정보 수정하기"
          btnColor="orange"
          onClick={() => {}}
        />
      </ButtonWrapper>
    </Container>
  );
}
