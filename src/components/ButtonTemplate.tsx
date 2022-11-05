import styled from "styled-components";
import PartyList from "../components/PartyList";
import SecTitle from "../components/SecTitle";

const Button = styled.button`
  width: 100%;
  padding: 14px 102px;
  background: #ff833e;
  color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export type ButtonProps = {
  btnText: string;
};

export default function ButtonTemplate({ btnText }: ButtonProps) {
  return <Button>{btnText}</Button>;
}
