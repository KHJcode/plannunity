import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/images/logo.svg";
import bell from "../../public/images/bell.svg";
import bag from "../../public/images/shopping-bag.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  height: 24px;
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
        <Image src={logo} alt="logo" />
      </LogoWrapper>
      <IconWrapper>
          <Image src={bell} alt="bell" />
          <Image src={bag} alt="bag" />
      </IconWrapper>
    </Container>
  );
}