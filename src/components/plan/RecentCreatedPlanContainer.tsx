import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import PlanThumbnail from "../templates/PlanThumbnail"
import SecTitle from "../templates/SecTitle"
import { setActive } from "../../modules/isActive"
import { PlanData } from "../../../pages"

type RecentCreatedPlanContainerProps = {
  plan: PlanData;
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
  font-family: 'SUIT-700';
  border: ${props => props.btnColor === "white" ? "1px solid #EDEDED" : "none"};
  color: ${props => props.btnColor === "white" ? "#000000" : "#FF833E"};
  background: ${props => props.btnColor === "white" ? "#F9F9F9": "#FFDFCD"};
`

export default function RecentCreatedPlanContainer({ plan }: RecentCreatedPlanContainerProps) {
  const dispatch = useDispatch();

  const onClickCreateButton = () => {
    dispatch(setActive("planEdit"));
  }

  return (
    <Container>
      <SecTitle text="회원님께서 제작하신 플랜" />
      {plan && <PlanThumbnail styleOption="private" plan={plan} />}
      <ButtonWrapper>
        <Button btnColor="white">모든 플랜 보기</Button>
        <Button btnColor="orange" onClick={onClickCreateButton}>플랜 만들기</Button>
      </ButtonWrapper>
    </Container>
  )
}