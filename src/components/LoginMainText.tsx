import styled from "styled-components";

type LoginMainTextType = {
  text1: string;
  text2: string;
}

const Container = styled.div`
  font-size: 25px;
  line-height: 40px;
  font-family: 'SUIT-700';
`

export default function LoginMainText({ text1, text2 }: LoginMainTextType) {
  return (
    <Container>{text1}<br />{text2}</Container>
  );
}