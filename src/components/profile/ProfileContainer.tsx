import {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
import styled from "styled-components";
import {logout} from "../../firebase/auth";
import IconSVG from "../templates/IconSVG";
import Image from "next/image";

const Container = styled.div`
  padding: 10px 20px 0 20px;
  height: 100vh;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 30px;
`;

const ProfileInfoLeftWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileTextWrapper = styled.div`
  display: flex;
  height: 71px;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`;

const Name = styled.div`
  font-size: 20px;
  line-height: 25px;
`;

const Email = styled.div`
  font-size: 15px;
  line-height: 19px;
  color: #747474;
`;

const StatInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StatInfoBox = styled.div`
  flex: 1;
  height: 105px;
  border-radius: 12px;
  border: 1px solid #ededed;
  background: #f9f9f9;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 20px;
`;

const Number = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ff833e;
  line-height: 20px;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
`;

const OptionItem = styled.div`
  width: 100%;
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
`;

const RedText = styled.div`
  color: #ff2525;
`;

interface UserInfo {
    name: string | null;
    email: string | null;
    imgURL: string | null;
}

const profileImageLoader = ({src}: any) => `https://cdn.pixabay.com/photo/2019/08/01/12/36/${src}`;

export default function ProfileInfoContainer() {
    // const dispatch = useDispatch();
    // const { name, email, imgURL } = useSelector((state: RootState) => state.userInfo);
    const [{name, email, imgURL}, setUserInfo] = useState<UserInfo>({
        name: "",
        email: "",
        imgURL: "",
    });

    useEffect(() => {
        setUserInfo({
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            imgURL: localStorage.getItem("imgURL"),
        });
    }, []);

    const onClickLogoutButton = async () => {
        localStorage.clear();
        await logout();
        // dispatch(setCurrentPage("home"));
    };

    return (
        <Container>
            {name && (
                <>
                    <ProfileInfoWrapper>
                        <ProfileInfoLeftWrapper>
                            <Image src={imgURL!} loader={profileImageLoader} alt={"profile"} width={71} height={71}
                                   style={{borderRadius: '50%'}}/>
                            <ProfileTextWrapper>
                                <Name>{name}</Name>
                                <Email>{email}</Email>
                            </ProfileTextWrapper>
                        </ProfileInfoLeftWrapper>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <IconSVG
                                imageId="edit-3"
                                stroke="currentColor"
                                strokeWidth={2}
                                width={24}
                                height={24}
                            />
                        </div>
                    </ProfileInfoWrapper>
                    <StatInfoWrapper>
                        <StatInfoBox>
                            <Text>
                                현재 보유하신
                                <br/>총 포인트 개수
                            </Text>
                            <Number>1,250P</Number>
                        </StatInfoBox>
                        <StatInfoBox>
                            <Text>
                                현재까지 받은
                                <br/>
                                모든 추천 횟수
                            </Text>
                            <Number>25,680추천</Number>
                        </StatInfoBox>
                    </StatInfoWrapper>
                    <OptionWrapper>
                        <OptionItem>내가 만든 플랜 리스트 보기</OptionItem>
                        <OptionItem>내가 추천한 플랜 리스트 보기</OptionItem>
                        <OptionItem>내가 저장한 플랜 리스트 보기</OptionItem>
                        <OptionItem>계정 정보 설정 및 변경</OptionItem>
                        <OptionItem onClick={onClickLogoutButton}>
                            <RedText>로그아웃하기</RedText>
                        </OptionItem>
                    </OptionWrapper>
                </>
            )}
        </Container>
    );
}
