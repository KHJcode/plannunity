import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import IconSVG from "./IconSVG";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  box-shadow: 0px -10px 20px rgba(222, 222, 222, 0.25);
  backdrop-filter: blur(30px);
  padding-bottom: 13px;
  z-index: 1;
`

export default function Navigation() {
  const { home, plan, friend, profile } = useSelector((state: RootState) => state.currentPage);
  return (
    <Container>
      <Link href="/" id="home" style={{ padding: "5px" }}>
          <IconSVG
              imageId={"home"}
              width={'28'}
              height={'28'}
              stroke={home ? "#FF833E" : "#D9D9D9"}
              strokeWidth={2}
          />
      </Link>
      <Link href="/plan" id="plan" style={{ padding: "5px" }}>
          <IconSVG
              imageId={"edit"}
              width={28}
              height={28}
              stroke={plan ? "#FF833E" : "#D9D9D9"}
              strokeWidth={2}
          />
      </Link>
      <Link href="/friend" id="friend" style={{ padding: "5px" }}>
          <IconSVG
              imageId={"users"}
              width={28}
              height={28}
              stroke={friend ? "#FF833E" : "#D9D9D9"}
              strokeWidth={2}
          />
      </Link>
      <Link href="/profile" id="profile" style={{ padding: "5px" }}>
          <IconSVG
              imageId={"user"}
              width={28}
              height={28}
              stroke={profile ? "#FF833E" : "#D9D9D9"}
              strokeWidth={2}
          />
      </Link>
    </Container>
  );
}
