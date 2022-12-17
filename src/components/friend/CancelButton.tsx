import styled from "styled-components";

type CancelButtonProps = {
  onClick: () => void;
}

const Conatiner = styled.div`
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border: 0.5px solid #EDEDED;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <Conatiner onClick={onClick}>
      <img src="images/cancel_gray.svg" />
    </Conatiner>
  );
}