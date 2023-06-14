import styled from "styled-components";
import IconSVG from "../templates/IconSVG";

type CancelButtonProps = {
  onClick: () => void;
};

const Conatiner = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 0.5px solid #ededed;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <Conatiner onClick={onClick}>
      <IconSVG imageId="cancel_gray" width={24} height={24} />
    </Conatiner>
  );
}
