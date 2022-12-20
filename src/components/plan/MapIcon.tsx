import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../../modules/isActive";

const Container = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom:40px;
  right: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  background: #FFFFFF;
  border: none;
`

export default function MapIcon() {
  const dispatch = useDispatch();
  
  const onClick = () => {
    dispatch(setActive("map"));
  }

  return (  
    <Container onClick={onClick}>
      <img src="/images/map.svg" />
    </Container>
  );
}