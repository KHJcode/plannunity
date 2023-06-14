import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { unsetActive } from "../../../../modules/isActive";
import Globe from "../../../../../public/images/earth.svg";
import Users from "../../../../../public/images/users_35.svg";
import { addShareTarget } from "../../../../modules/currentData";
import { RootState } from "../../../../modules";
import IconSVG from "../../../templates/IconSVG";

const Container = styled.div`
  background: #ffffff;
  padding: 25px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const MainText = styled.div`
  font-size: 22px;
  line-height: 35px;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SelectBox = styled.div<{ clicked: boolean }>`
  padding: 15px 16px;
  background: ${props => props.clicked ? "#FFECE1" : "#F9F9F9;"};
  border: 1px solid ${props => props.clicked ? "#FFECE1" : "#EDEDED"};
  border-radius: 12px;
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  margin-left: 15px;
  justify-content: center;
`

const TitleText = styled.div<{ clicked: boolean }>`
  font-size: 18px;
  line-height: 20px;
  color: #454545;
  color: ${props => props.clicked ? "#FF833E" : "#454545"};
`

const DescText = styled.div<{ clicked: boolean }>`
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.clicked ? "#F4AF88" : "#A4A4A4"};
`

export default function ShareTargetModal() {
  const dispatch = useDispatch();
  const { shareTarget } = useSelector((state: RootState) => state.currentData);

  const onClickCancelButton = () => {
    dispatch(unsetActive("shareTarget"));
  }

  const onClickPublic = () => {
    dispatch(unsetActive("shareTarget"));
    dispatch(addShareTarget("public"));
  }

  const onClickOnlyFriend = () => {
    dispatch(unsetActive("shareTarget"));
    dispatch(addShareTarget("friends"));
  }

  return (
    <Container>
      <TopWrapper>
        <MainText>공유 대상 변경</MainText>
        <IconSVG
          imageId="cancel"
          width={24}
          height={24}
          onClick={onClickCancelButton}
        />
      </TopWrapper>
      <SelectBoxWrapper>
          <SelectBox onClick={onClickPublic} clicked={shareTarget === "public"}>
            <Globe />
            <TextWrapper>
              <TitleText clicked={shareTarget === "public"}>전체 공유</TitleText>
              <DescText clicked={shareTarget === "public"}>해당 플랜을 모두에게 공유해요</DescText>
            </TextWrapper>
          </SelectBox>
          <SelectBox onClick={onClickOnlyFriend} clicked={shareTarget === "friends"}>
            <Users />
            <TextWrapper>
              <TitleText clicked={shareTarget === "friends"}>친구에게만 공유</TitleText>
              <DescText clicked={shareTarget === "friends"}>해당 플랜을 친구에게만 보이게 공유해요</DescText>
            </TextWrapper>
          </SelectBox>
        </SelectBoxWrapper>
    </Container>
  );
}