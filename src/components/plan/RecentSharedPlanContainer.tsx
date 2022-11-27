import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import PlanThumbnail from "./PlanThumbnail"
import SecTitle from "../templates/SecTitle"
import { RootState } from "../../modules"
import { setActive } from "../../modules/isActive"

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

export default function RecentSharedPlanContainer() {
  const dispatch = useDispatch();
  const onClickCreateButton = () => {
    dispatch(setActive("planShare"));
  }

  return (
    <Container>
      <SecTitle text="회원님께서 공유하신 플랜" />
      <PlanThumbnail isShared={true} />
      <ButtonWrapper>
        <Button btnColor="white">공유한 플랜 보기</Button>
        <Button btnColor="orange" onClick={onClickCreateButton}>플랜 공유하기</Button>
      </ButtonWrapper>
    </Container>
  )
}