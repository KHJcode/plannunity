import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  
`

const BudgetBox = styled.div`
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SumBox = styled.div`
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 15px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BoxLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GrayText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #969696;
`;

const Sum = styled.div`
  font-size: 24px;
  line-height: 25px;
  font-family: "SUIT-700";
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainText = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const SubText = styled.div`
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  color: #969696;
`;

export default function BudgetList() {
  const router = useRouter();
  return (
    <Container>
      <SumBox>
        <BoxLeftWrapper>
          <GrayText>총 예산 금액</GrayText>
          <Sum>15000원</Sum>
        </BoxLeftWrapper>
        {router.pathname === "/plan" && <img src="/images/edit-3.svg" />}
      </SumBox>
      <BudgetBox>
        <TextWrapper>
          <MainText>교통비</MainText>
          <SubText>2400원</SubText>
        </TextWrapper>
        <TextWrapper>
          <MainText>생수 2L</MainText>
          <SubText>1600원</SubText>
        </TextWrapper>
        <TextWrapper>
          <MainText>라면</MainText>
          <SubText>1500원</SubText>
        </TextWrapper>
      </BudgetBox>
    </Container>
    
  );
}
