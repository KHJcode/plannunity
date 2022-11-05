import styled from "styled-components";
import InputBar, { InputInfoProps } from "../components/InputBar";

const Container = styled.div`
  width: 100%;
  padding: 0 20px 30px 20px;
`;

export default function InputBarContainer({
  labelText,
  innerText,
}: InputInfoProps) {
  return (
    <Container>
      <InputBar innerText={innerText} labelText={labelText} />
    </Container>
  );
}
