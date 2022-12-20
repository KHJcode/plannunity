import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { PlanData } from "../../../pages";

type PlanThumbnailType = {
  styleOption: string;
  plan: PlanData;
}

const Conatiner = styled.div`
  width: 100%;
  height: 165px;
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(180, 180, 180, 0.26) 19.7%, rgba(0, 0, 0, 0.58) 100%), url(https://cdn.pixabay.com/photo/2017/10/26/19/45/red-2892235_1280.png);
  background-size: 100% 165px;
  margin-top: 5px;
  padding: 15px 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  z-index: 0;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 8px;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 5px;
`

const SubText = styled.div`
  color: #FFFFFF;
  font-size: 12px;
  line-height: 15px;
  font-family: 'SUIT-500';
  display: flex;
  align-items: center;
`

const MainText = styled.div`
  color: #FFFFFF;
  font-size: 20px;
  line-height: 25px;
  height: 25px;
  overflow: hidden;
`

const ProfileImg = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
`

const CancelButton = styled.button`
  border: none;
  background: #FFFFFF;
  font-family: 'SUIT-700';
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #141414;
  padding: 6px 14px;
  border-radius: 15px;
  position: absolute;
  top: 12px;
  right: 10px;
`

export default function PlanThumbnail({ styleOption, plan }: PlanThumbnailType) {
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const planURL = `plan/${plan.id}`;
  const router = useRouter();

  const onClickDeleteButton = () => {
    setDeleteButtonClicked(true);
  }

  const onClick = () => {
    console.log(deleteButtonClicked)
    if(!deleteButtonClicked) {
      router.push(planURL);
    }
  }

  if(styleOption === "share" || styleOption === "friend") return (
    <Conatiner onClick={onClick}>
      <LeftWrapper>
        <SubText>
          {styleOption === "friend" && <ProfileImg src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg" />}
          {styleOption === "share" ? "최근 회원님께서 공유하셨어요" : `By ${plan.author}`}
        </SubText>
        <MainText>{plan.planTitle}</MainText>
      </LeftWrapper>
        <RightWrapper>
          <SubText>123 저장</SubText>
          <SubText>32 추천</SubText>
        </RightWrapper>
    </Conatiner>
  );
  else if(styleOption === "cart" || styleOption === "private") return (
    <Conatiner onClick={onClick}>
      {styleOption === "cart" && <CancelButton onClick={onClickDeleteButton}>저장 취소하기</CancelButton>}
      <LeftWrapper>
        <SubText>{styleOption === "private" ? "최근 회원님께서 작성하셨어요" : "멋진 스카이라인과 함께"}</SubText>
        <MainText>{plan.planTitle}</MainText>
      </LeftWrapper>
    </Conatiner>
  );
  else return <></>;
}