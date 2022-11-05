import styled from "styled-components";
import ButtonTemplate from "../components/ButtonTemplate";
import PartyList from "../components/PartyList";
import SecTitle from "../components/SecTitle";

const Conatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 102px;
  background: #ff833e;
  color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export default function PartyListContainer() {
  return (
    <Conatiner>
      <SecTitle text="지금 파티 참가하기" />
      <PartyList />
      <ButtonTemplate btnText="더 많은 파티 리스트 보기" />
    </Conatiner>
  );
}
