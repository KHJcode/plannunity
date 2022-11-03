import styled from "styled-components";
import Home from "../../public/images/home.svg";
import Edit from "../../public/images/edit.svg";
import Users from "../../public/images/users.svg";
import User from "../../public/images/user.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { setCurrentPage } from "../modules/currentPage";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  box-shadow: 0px -10px 20px rgba(222, 222, 222, 0.25);
  backdrop-filter: blur(30px);
`

export default function Navigation() {
  const { home, plan, party, profile } = useSelector((state: RootState) => state.currentPage);
  const dispatch = useDispatch();

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(setCurrentPage(e.currentTarget.id));
  }

  return (
    <Container>
      <Link href="/" id="home" onClick={onClick} style={{ padding: "5px" }}><Home stroke={home ? "#FF833E" : "#D9D9D9"} /></Link>
      <Link href="/plan" id="plan" onClick={onClick} style={{ padding: "5px" }}><Edit stroke={plan ? "#FF833E" : "#D9D9D9"} /></Link>
      <Link href="/party" id="party" onClick={onClick} style={{ padding: "5px" }}><Users stroke={party ? "#FF833E" : "#D9D9D9"}/></Link>
      <Link href="/profile" id="profile" onClick={onClick} style={{ padding: "5px" }}><User stroke={profile ? "#FF833E" : "#D9D9D9"} /></Link>
    </Container>
  );
}