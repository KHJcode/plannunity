import styled from "styled-components";
import PageTitle from "../templates/PageTitle";
import Dot from "../../../public/images/dot.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { unsetActive } from "../../modules/isActive";
import PlanThumbnail from "../templates/PlanThumbnail";
import { PlanData } from "../../../pages";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  padding: 40px 20px 60px 20px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? 0 : "100vw")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  background: #ffffff;
  z-index: 1000;
  transition: 0.5s;
  overflow-y: scroll;
`

const TopWrapper = styled.div`
  padding: 0 5px;
  margin-bottom: 40px;
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 3px;
`

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`;

const MainText = styled.div`
  font-size: 20px;
  line-height: 35px;
  font-family: 'SUIT-700';
  margin-bottom: 20px;
`

const PlanList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

export default function CartContainer() {
  const { cart } = useSelector((state: RootState) => state.isActive);
  const plans = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(unsetActive("cart"));
  }
  return (
    <Container isActive={cart}>
      <TopWrapper>
        <TitleWrapper>
          <img src="images/arrow-left.svg" onClick={onClick} />
          <PageTitle text="장바구니" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
      </TopWrapper>
      <MainText>현재 총 3개의<br />플랜이 저장되었어요</MainText>
      <PlanList>
        {plans.map((plan: PlanData) => (
          <PlanThumbnail styleOption="cart" plan={plan} key={plan.id} />
        ))}
      </PlanList>
    </Container>
  );
}