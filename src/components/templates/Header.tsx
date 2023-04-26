import styled from "styled-components";
import Logo from "../../../public/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import PageTitle from "./PageTitle";
import { useRouter } from "next/router";
import { setActive, setToggle } from "../../modules/isActive";
import React from "react";
import IconSVG from "./IconSVG";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 104px;
  padding: 40px 20px;
  background: #ffffff;
`;

const LogoWrapper = styled.div`
  margin-left: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 10px;
`;

const TitleWrapper = styled.span`
  display: flex;
  gap: 3px;
`;

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`;

export default function Header() {
  const { home } = useSelector((state: RootState) => state.currentPage);
  const friendList = useSelector(
    (state: RootState) => state.isActive.friendList
  );
  const router = useRouter();
  const dispatch = useDispatch();

  const pathnameToPageTitle = {
    "/plan": "플랜",
    "/profile": "프로필",
    "/friend": friendList ? "친구 리스트" : "친구",
  };
  const pageTitle = (pathnameToPageTitle as any)[router.pathname];
  const pathnameToIconId = {
    "/plan": ["edit", "edit-3"],
    "/friend": ["friendList", "users-24"],
  };
  const IconId = (pathnameToIconId as any)[router.pathname];

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflowY = "hidden";
    if (router.pathname === "/plan" && e.currentTarget.id === "edit") {
      dispatch(setActive("planEdit"));
    } else if (e.currentTarget.id === "friendList") {
      dispatch(setToggle(e.currentTarget.id, friendList));
    } else {
      dispatch(setActive(e.currentTarget.id));
    }
  };

  return (
    <Container>
      <LogoWrapper>
        {home ? (
          <Logo />
        ) : (
          <TitleWrapper>
            <PageTitle text={pageTitle} />
            <DotWrapper>
              <IconSVG imageId={"dot"} width={4} height={4} />
            </DotWrapper>
          </TitleWrapper>
        )}
      </LogoWrapper>
      <IconWrapper>
        {Object.keys(pathnameToIconId).includes(router.pathname) && (
          <IconSVG
            onClick={onClick}
            imageId={IconId[1]}
            id={IconId[0]}
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
          />
        )}
        {router.pathname !== "/friend" && (
          <IconSVG
            stroke="currentColor"
            strokeWidth={2}
            imageId="shopping-bag"
            width={24}
            height={24}
            id="cart"
            onClick={onClick}
          />
        )}
        <IconSVG
          stroke="currentColor"
          strokeWidth={2}
          imageId="bell"
          width={24}
          height={24}
          id="bell"
          onClick={onClick}
        />
      </IconWrapper>
    </Container>
  );
}
