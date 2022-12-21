import styled from "styled-components";

type EditAndCreateButtonProps = {
  text: string;
  btnColor: "orange" | "white";
  onClick: () => void;
};

const Container = styled.button<{ btnColor: string }>`
  flex: 1;
  padding: 14px 0;
  border-radius: 10px;
  background: ${(props) =>
    props.btnColor === "white" ? "#F5F5F5" : "#FF833E"};
  color: ${(props) => (props.btnColor === "white" ? "#FF833E" : "#F5F5F5")};
  border: none;
`;

export default function EditAndCreateButton({
  text,
  btnColor,
  onClick,
}: EditAndCreateButtonProps) {
  const handleOnClick = () => {
    onClick();
  };
  return (
    <Container btnColor={btnColor} onClick={handleOnClick}>
      {text}
    </Container>
  );
}
