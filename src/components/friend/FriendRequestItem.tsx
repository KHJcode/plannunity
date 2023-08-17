import {useDispatch} from "react-redux";
import styled from "styled-components";
import {setActive} from "../../modules/isActive";
import CancelButton from "./CancelButton";

const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 13px 5px 13px 10px;
  display: flex;
  justify-content: space-between;
`

const LeftWrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`

const ProfileImg = styled.img`
  width: 54px;
  height 54px;
  border-radius: 50%;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const NameText = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-family: 'SUIT-700';
`

const DescText = styled.div`
  font-size: 13px;
  line-height: 15px;
  font-family: 'SUIT-500';
  color: #9D9D9D;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

const AcceptButton = styled.button`
  height: 40px;
  background: #FFFFFF;
  border: 0.5px solid #EDEDED;
  border-radius: 12px;
  padding: 11px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #FF833E;
`

export default function FriendRequestItem() {
    const dispatch = useDispatch();

    const handleClickDetailLink = () => {
        dispatch(setActive("friendDetail"));
    };

    const handleClickAcceptButton = () => {
    };

    const handleClickCancelButton = () => {
    };

    return (
        <Container>
            <LeftWrapper onClick={handleClickDetailLink}>
                <ProfileImg src="https://cdn.pixabay.com/photo/2017/10/26/19/45/red-2892235_1280.png"/>
                <TextWrapper>
                    <NameText>나제원</NameText>
                    <DescText>친구 요청을 보냈어요</DescText>
                </TextWrapper>
            </LeftWrapper>
            <ButtonWrapper>
                <AcceptButton onClick={handleClickAcceptButton}>수락하기</AcceptButton>
                <CancelButton onClick={handleClickCancelButton}/>
            </ButtonWrapper>
        </Container>
    );
};
