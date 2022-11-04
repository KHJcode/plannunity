import styled from "styled-components";
import NotificationItem from "./NotificationItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default function NotificationList() {
  return (
    <Container>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </Container>
  );
}