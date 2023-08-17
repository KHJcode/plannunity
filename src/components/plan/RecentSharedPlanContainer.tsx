import { useDispatch } from "react-redux"
import styled from "styled-components"
import PlanThumbnail from "../templates/PlanThumbnail"
import SecTitle from "../templates/SecTitle"
import { setActive } from "../../modules/isActive"

type RecentSharedPlanContainerProps = {
  plan: any;
}

const Container = styled.div`
  padding: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`

const Button = styled.button<{ btnColor: string }>`
  height: 50px;
  width: 50%;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  border: ${props => props.btnColor === "white" ? "1px solid #EDEDED" : "none"};
  color: ${props => props.btnColor === "white" ? "#000000" : "#FF833E"};
  background: ${props => props.btnColor === "white" ? "#F9F9F9": "#FFDFCD"};
`

const ReplaceBox = styled.div`
  width: 100%;
  height: 165px;
  border-radius: 15px;
  background: #F9F9F9;
  background-size: 100% 165px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ReplaceText = styled.div`
  
`

export default function RecentSharedPlanContainer({ plan }: RecentSharedPlanContainerProps) {
  const dispatch = useDispatch();
  const onClickCreateButton = () => {
    dispatch(setActive("planShare"));
  }

  return (
    <Container>
      <SecTitle text="회원님께서 공유하신 플랜" />
      {plan ? <PlanThumbnail styleOption="share" plan={plan} /> : <ReplaceBox><ReplaceText></ReplaceText></ReplaceBox>}
      <ButtonWrapper>
        <Button btnColor="white">공유한 플랜 보기</Button>
        <Button btnColor="orange" onClick={onClickCreateButton}>플랜 공유하기</Button>
      </ButtonWrapper>
    </Container>
  )
}