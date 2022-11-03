import styled from "styled-components";
import Logo from "../../public/images/logo.svg";
import { IsClicked } from "../../pages/_app";

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

export default function Header({ isClicked, setIsClicked }: HeaderType) {
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
        <Logo />
      </LogoWrapper>
      <IconWrapper>
        <img src="images/shopping-bag.svg" onClick={onClick} id="bag" />
        <img src="images/bell.svg" onClick={onClick} id="bell" />
      </IconWrapper>
    </Container>
  );
}