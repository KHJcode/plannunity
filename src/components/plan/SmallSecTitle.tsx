import styled from "styled-components";

type SmallSecTitleProps = {
  text: string;
}

const Container = styled.div`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 15px;
`

export default function SmallSecTitle({ text }: SmallSecTitleProps) {
  return (
    <Container>{text}</Container>
  );
}