import styled from "styled-components";
import PartyList from "../components/PartyList";
import SecTitle from "../components/SecTitle";

const Conatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 100%;
  padding: 14px 102px;
  background: #FF833E;
  color: #FFFFFF;
  border: none;
  border-radius: 10px;
`

export default function PartyListContainer() {
  return (
    <Conatiner>
      <SecTitle text="지금 파티 참가하기" />
      <PartyList />
      <Button>더 많은 파티 리스트 보기</Button>
    </Conatiner>
  );
}