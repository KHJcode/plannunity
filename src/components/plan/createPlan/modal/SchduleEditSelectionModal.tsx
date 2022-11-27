import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../modules";
import styled from "styled-components";
import PlanSchduleItem from "../../PlanSchduleItem";
import EditAndCreateButton from "../../.././templates/EditAndCreateButton";
import { setActive, unsetActive } from "../../../../modules/isActive";
import { clickSchdule, deleteSchdule, SchduleState } from "../../../../modules/schdule";

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
  const schdules = useSelector((state: RootState) => state.schdule);
  const dispatch = useDispatch();

  const onClickCancelButton = () => {
    dispatch(unsetActive("schduleEdit"));
  };

  const onClickDeleteButton = (seq: number) => {
    dispatch(deleteSchdule(seq));
  }

  const onClickSchdule = (seq: number) => {
    console.log(seq);
    dispatch(clickSchdule(seq));
    dispatch(setActive("schduleEditOne"));
    dispatch(unsetActive("schduleEdit"));
  }

  const onClickSubmitButton = () => {
    dispatch(unsetActive("schduleEdit"));
  }

  return (
    <Container isActive={schduleEdit}>
      <TopWrapper>
        <MainText>일정 정보 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <SchduleItemList>
        {schdules.map((schdule: SchduleState) => (
          <SchduleItemWrapper key={schdule.seq}>
            <div onClick={() => onClickSchdule(schdule.seq)} style={{ "width": "100%" }}>
              <PlanSchduleItem schdule={schdule} />
            </div>
            <img src="images/cancel_gray.svg" onClick={() => onClickDeleteButton(schdule.seq)} />
          </SchduleItemWrapper>
        ))}
      </SchduleItemList>
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
