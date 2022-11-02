import Image from "next/image";
import styled from "styled-components";
import Logo from "../../public/images/logo.svg";
import Bell from "../../public/images/bell.svg";
import Bag from "../../public/images/shopping-bag.svg";


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

export default function Header() {
  return (
    <Container>
      <LogoWrapper> 
        <Logo />
      </LogoWrapper>
      <IconWrapper>
        <Bell />
        <Bag />
      </IconWrapper>
    </Container>
  );
}