import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {RootState} from "../../../modules";
// import PlanThumbnail from "../../templates/PlanThumbnail";
import SecTitle from "../../templates/SecTitle";
import {useSwipeable} from "react-swipeable";
import {unsetActive} from "../../../modules/isActive";
import IconSVG from "../../templates/IconSVG";
import Image from "next/image";

const profileImageLoader = ({src}: any) => {
    return `https://cdn.pixabay.com/photo/2017/08/30/12/45/${src}`;
};

const Conatiner = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  background: #ffffff;
  border-radius: 20px 20px 0 0;
  overflow-y: scroll;
  padding: 35px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  transform: ${(props) =>
          props.isActive ? "translateY(0)" : "translateY(25vh)"};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: 0.5s;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const NameText = styled.div`
  font-size: 25px;
  line-height: 31px;
  font-weight: 700;
  text-align: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 50px;
  width: 100%;
`;

const InfoBoxWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoBox = styled.div<{ size: number }>`
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 10px;
  flex: ${(props) => props.size};
  padding: 10px 12px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SmallTitle = styled.div`
  font-size: 15px;
  line-height: 19px;
  color: #8a8a8a;
`;

const NumberText = styled.div`
  font-size: 20px;
  line-height: 25px;
  color: #ff833e;
`;

const IsFriendButton = styled.button`
  background: #ffebdf;
  border-radius: 12px;
  text-align: center;
  padding: 13px 0;
  height: 45px;
  width: 100%;
  color: #ff833e;
  font-size: 15px;
  line-height: 19px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function FriendDetailModal() {
    const {friendDetail} = useSelector((state: RootState) => state.isActive);
    const [scrollLoc, setScrollLoc] = useState(0);
    const dispatch = useDispatch();

    const swipeHandler = useSwipeable({
        onSwipedDown: () => dispatch(unsetActive("friendDetail")),
        swipeDuration: 250,
    });

    useEffect(() => {
        if (friendDetail) {
            const scrollY = window.scrollY;
            setScrollLoc(scrollY);
            document.body.style.cssText = `
              position: fixed; 
              top: -${scrollY}px;
              overflow-y: scroll;
              width: 100%;
            `;
        } else {
            document.body.style.cssText = ``;
            window.scrollTo(0, scrollLoc);
        }
    }, [friendDetail]);

    return (
        <Conatiner isActive={friendDetail} {...swipeHandler}>
            <TopWrapper>
                <ProfileWrapper>
                    <Image loader={profileImageLoader} src={"girl-2696947_1280.jpg"} alt={"profile"}
                           width={110} height={110} style={{borderRadius: '50%'}}/>
                    <NameText>나제원</NameText>
                </ProfileWrapper>
                <InfoWrapper>
                    <InfoBoxWrapper>
                        <InfoBox size={2}>
                            <SmallTitle>포인트</SmallTitle>
                            <NumberText>1,250P</NumberText>
                        </InfoBox>
                        <InfoBox size={3}>
                            <SmallTitle>추천</SmallTitle>
                            <NumberText>25,680추천</NumberText>
                        </InfoBox>
                    </InfoBoxWrapper>
                    <IsFriendButton>
                        <IconSVG
                            imageId="users_18"
                            width={18}
                            height={18}
                            style={{marginRight: "10px"}}
                        />
                        서로 친구입니다
                    </IsFriendButton>
                </InfoWrapper>
            </TopWrapper>
            <BottomWrapper>
                <SecTitle text="제작한 플랜"/>
                <PlanList>
                    {/* <PlanThumbnail styleOption="friend" />
          <PlanThumbnail styleOption="friend" />
          <PlanThumbnail styleOption="friend" /> */}
                </PlanList>
            </BottomWrapper>
        </Conatiner>
    );
}
