import styled from "styled-components";
import Home from "../../public/images/home.svg";
import Edit from "../../public/images/edit.svg";
import Users from "../../public/images/users.svg";
import User from "../../public/images/user.svg";

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
  return (
    <Container>
      <Home stroke="#FF833E" />
      <Edit />
      <Users />
      <User />
    </Container>
  );
}