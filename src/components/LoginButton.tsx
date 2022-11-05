import styled from "styled-components";

type LoginButtonType = {
  text: string;
  onClickNextButton: () => void;
}

const Container = styled.div`
  width: 100%;
  height: 54px;
  border: none;
  background: #FF833E;
  color: #FFFFFF;
  border-radius: 15px;
  text-align: center;
  padding: 16px;
`

export default function LoginButton({ text, onClickNextButton }: LoginButtonType) {
  const onClick = () => {
    console.log("aaa");
    onClickNextButton();
  }
  return (
    <Container onClick={onClick}>{text}</Container>
  );
}