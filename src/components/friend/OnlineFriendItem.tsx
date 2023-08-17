import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../../modules/isActive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  gap: 10px;
  flex-shrink: 0;
`

const ProfileContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
`

const Profile = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const IsOnline = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const NameText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #5B5B5B;
`

export default function OnlineFriendItem() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setActive("friendDetail"));
  }

  return (
    <Container onClick={onClick}>
      <ProfileContainer>
        <Profile src="https://cdn.pixabay.com/photo/2017/10/26/19/45/red-2892235_1280.png" />
        <IsOnline src="images/isOnline.svg" />
      </ProfileContainer>
      <NameText>나제원</NameText>
    </Container>
  );
}