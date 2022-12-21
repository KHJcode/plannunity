import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../../modules/isActive";

const Container = styled.button<{ route: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: ${props => props.route ? "40px" : "116.5px"};
  right: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  background: #FFFFFF;
  border: none;
`

export default function MapIcon() {
  const dispatch = useDispatch();
  const route = useRouter();
  
  const onClick = () => {
    dispatch(setActive("map"));
  }

  return (  
    <Container onClick={onClick} route={route.pathname === "/plan" ? true : false} >
      <img src="/images/map.svg" />
    </Container>
  );
}