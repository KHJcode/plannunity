import {useDispatch} from "react-redux";
import styled from "styled-components";
import {setActive} from "../../modules/isActive";
import Image from "next/image";

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

const profileImageLoader = ({src}: any) => `https://cdn.pixabay.com/photo/2017/10/26/19/45/${src}`;

export default function OnlineFriendItem() {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setActive("friendDetail"));
    };

    return (
        <Container onClick={onClick}>
            <ProfileContainer>
                <Image
                    loading={"eager"}
                    loader={profileImageLoader}
                    src="red-2892235_1280.png"
                    alt={"나제원"}
                    height={60}
                    width={60}
                    style={{borderRadius: '50%'}}
                />
                <IsOnline src="images/isOnline.svg"/>
            </ProfileContainer>
            <NameText>나제원</NameText>
        </Container>
    );
}
