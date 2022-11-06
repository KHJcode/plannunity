import styled from "styled-components";
import Logo from "../../public/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import PageTitle from "./PageTitle";
import Dot from "../../public/images/dot.svg";
import { useRouter } from "next/router";
import { setActive } from "../modules/isActive";

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

export default function Header() {
  const { home, plan, party, profile } = useSelector((state: RootState) => state.currentPage);
  const router = useRouter();
  const dispatch = useDispatch();
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflowY = "hidden";
    dispatch(setActive(e.currentTarget.id));
  }

  return (
    <Container>
      <LogoWrapper> 
        {home && <Logo />}
        {plan && <TitleWrapper><PageTitle text="플랜" /><DotWrapper><Dot /></DotWrapper></TitleWrapper>}
        {party && <TitleWrapper><PageTitle text="파티" /><DotWrapper><Dot /></DotWrapper></TitleWrapper>}
        {profile && <TitleWrapper><PageTitle text="프로필" /><DotWrapper><Dot /></DotWrapper></TitleWrapper>}
      </LogoWrapper>
      <IconWrapper>
        {(router.pathname === "/plan" || router.pathname === "/party") ? <img src="images/edit-3.svg" onClick={onClick} id="edit" /> : <></>}
        <img src="images/shopping-bag.svg" onClick={onClick} id="bag" />
        <img src="images/bell.svg" onClick={onClick} id="bell" />
      </IconWrapper>
    </Container>
  );
}