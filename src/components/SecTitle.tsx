import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
`

type SecTitleType = {
  text: string;
}

export default function SecTitle({ text }: SecTitleType) {
  return (
    <Container>{text}</Container>
  );
}