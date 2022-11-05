import RegisterFormContainer from "../src/containers/RegisterFormContainer";
import RegisterSuccessContainer from "../src/containers/RegisterSuccessContainer";
import RegisterAuthContainer from "../src/containers/ReigsterAuthContainer";

export default function Register() {
  return (
    <div style={{ "height": "100vh" }}>
      <RegisterSuccessContainer />
      <RegisterAuthContainer />
      <RegisterFormContainer />
    </div>
  );
}