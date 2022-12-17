import styled from "styled-components";

type SecRightOrangeTextProps = {
  text: string;
}

const Container = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
  margin-right: 5px;
  color: #FF833E;
`

export default function SecRightOrangeText({ text }: SecRightOrangeTextProps) {
  return (
    <Container>{text}</Container>
  );
}