import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { BudgetsState } from "../../modules/budget";
import IconSVG from "../templates/IconSVG";

type BudgetListProps = {
  budgetData?: BudgetsState;
};

const Container = styled.div``;

const BudgetBox = styled.div`
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 102px;
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

const ReplaceText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #bfbfbf;
  font-family: "SUIT-400";
`;

export default function BudgetList({ budgetData }: BudgetListProps) {
  const router = useRouter();
  const budgets = useSelector((state: RootState) => state.budget);
  const selectedBudget = budgets.filter((item) => item.isSelected)[0];
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(0);
    for (const budget of budgetData ?? budgets) {
      setSum((sum) => sum + budget.budget);
    }
  }, [selectedBudget, budgetData, budgets]);

  return (
    <Container>
      <SumBox>
        <BoxLeftWrapper>
          <GrayText>총 예산 금액</GrayText>
          <Sum>{sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Sum>
        </BoxLeftWrapper>
        {router.pathname === "/plan" && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconSVG
              imageId="edit-3"
              stroke="currentColor"
              strokeWidth={2}
              width={24}
              height={24}
            />
          </div>
        )}
      </SumBox>
      <BudgetBox>
        {router.pathname === "/plan" ? (
          budgets.length ? (
            budgets.map((budget) => (
              <TextWrapper key={budget.id}>
                <MainText>{budget.title}</MainText>
                <SubText>
                  {budget.budget
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </SubText>
              </TextWrapper>
            ))
          ) : (
            <ReplaceText>새로운 예산을 추가해보세요...</ReplaceText>
          )
        ) : (
          budgetData?.map((budget) => (
            <TextWrapper key={budget.id}>
              <MainText>{budget.title}</MainText>
              <SubText>
                {budget.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </SubText>
            </TextWrapper>
          ))
        )}
      </BudgetBox>
    </Container>
  );
}
