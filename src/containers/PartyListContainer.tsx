import { useRouter } from "next/router";
import styled from "styled-components";
import ButtonTemplate from "../components/ButtonTemplate";
import PartyList from "../components/PartyList";
import SecTitle from "../components/SecTitle";

type PartyListContainerType = {
  title: string;
}

const Conatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 100%;
  padding: 14px 102px;
  background: #ff833e;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
`

export default function PartyListContainer({ title }: PartyListContainerType) {
  const router = useRouter();
  return (
    <Conatiner>
      <SecTitle text={title} />
      <PartyList />
      {router.pathname === "/" && <Button>더 많은 파티 리스트 보기</Button>}
    </Conatiner>
  );
}
