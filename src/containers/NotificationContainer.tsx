import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Dot from "../../public/images/dot.svg";
import NotificationList from "../components/NotificationList";
import { IsClicked } from "../../pages/_app";

type NotificationContainerType = {
  isClicked: IsClicked;
  setIsClicked: ($: IsClicked) => void;
}

const Container = styled.div<{ isClicked: boolean }>`
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  position: absolute;
  top: 0;
  left: ${props => props.isClicked ? 0 : "100vw"};
  background: #FFFFFF;
  z-index: 1000;
  transition: .3s;
  touch-action: none;
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

export default function NotificationContainer({ isClicked, setIsClicked }: NotificationContainerType) {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsClicked({
      ...isClicked,
      [e.currentTarget.id]: false
    });
  }

  return (
    <Container isClicked={isClicked.bell}>
      <TopWrapper>
        <TitleWrapper>
          <img src="images/arrow-left.svg" onClick={onClick} id="bell" />
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