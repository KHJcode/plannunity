import styled from "styled-components";
import Logo from "../../public/images/logo.svg";
import { IsClicked } from "../../pages/_app";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import PageTitle from "./PageTitle";
import Dot from "../../public/images/dot.svg";

type HeaderType = {
  isClicked: IsClicked;
  setIsClicked: ($: IsClicked) => void;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  height: 24px;
  padding: 0 20px;
`

const LogoWrapper = styled.div`
  margin-left: 5px;
`

const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 10px;
`

const TitleWrapper = styled.span`
  display: flex;
  gap: 3px;
`

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`

export default function Header({ isClicked, setIsClicked }: HeaderType) {
  const { home, plan, party, profile } = useSelector((state: RootState) => state.currentPage);
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflowY = "hidden";
    setIsClicked({
      ...isClicked,
      [e.currentTarget.id]: true
    })
  }

  return (
    <Container>
      <LogoWrapper> 
        {home && <Logo />}
        {plan && <TitleWrapper><PageTitle text="플랜" /><DotWrapper><Dot /></DotWrapper></TitleWrapper>}
        {party && <TitleWrapper><PageTitle text="파티" /><DotWrapper><Dot /></DotWrapper></TitleWrapper>}
        {profile && <TitleWrapper><PageTitle text="마이 페이지" /><DotWrapper><Dot /></DotWrapper></TitleWrapper>}
      </LogoWrapper>
      <IconWrapper>
        <img src="images/shopping-bag.svg" onClick={onClick} id="bag" />
        <img src="images/bell.svg" onClick={onClick} id="bell" />
      </IconWrapper>
    </Container>
  );
}