import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`;

const HeaderText = styled.div`
  font-family: "SUIT-500";
  font-size: "18px";
  font-weight: 600;
  margin: 0 30px 20px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 15px;
  font-size: 15px;
  background: transparent;
  border-radius: 6px;
  font-family: "SUIT-500";

  &::placeholder {
    color: #bfbfbf;
  }
`;

export type InputInfoProps = {
  innerText: string;
  labelText: string;
};

export default function InputBar({ innerText, labelText }: InputInfoProps) {
  return (
    <>
      <HeaderText>{labelText}</HeaderText>
      <Container>
        <Input placeholder={innerText} />
      </Container>
    </>
  );
}
