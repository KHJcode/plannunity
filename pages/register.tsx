import { useRef, useState } from "react";
import RegisterFormContainer from "../src/containers/RegisterFormContainer";
import RegisterSuccessContainer from "../src/containers/RegisterSuccessContainer";
import RegisterAuthContainer from "../src/containers/ReigsterAuthContainer";

export default function register() {
  const [translateHeight, setTranslateHeight] = useState<number>(-100);
  const container = useRef<HTMLDivElement>(null);
  const onClickNextButton = () => {
    container.current!.style.transform = `translateY(${translateHeight}vh)`;
    setTranslateHeight(translateHeight => translateHeight - 100);
  }

  return (
    <div style={{ "height": "100vh", "overflowY": "hidden" }}>
      <div style={{ "transition": ".5s" }} ref={container} >
        <RegisterFormContainer onClickNextButton={onClickNextButton} />
        <RegisterAuthContainer onClickNextButton={onClickNextButton} />
        <RegisterSuccessContainer />
      </div>
    </div>
  );
}