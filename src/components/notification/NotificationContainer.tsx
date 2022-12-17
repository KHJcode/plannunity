import styled from "styled-components";
import PageTitle from "../templates/PageTitle";
import Dot from "../../../public/images/dot.svg";
import NotificationList from "./NotificationList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { unsetActive } from "../../modules/isActive";

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
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 30px;
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

const Number = styled.span`
  color: #FF833E;
  font-size: 22px;
  line-height: 24px;
`

export default function NotificationContainer() {
  const { bell } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(unsetActive("bell"));
  }
  return (
    <Container isActive={bell}>
      <TopWrapper>
        <TitleWrapper>
          <img src="images/arrow-left.svg" onClick={onClick} />
          <PageTitle text="알림" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
        <Number>3개</Number>
      </TopWrapper>
      <NotificationList />
    </Container>
  );
}