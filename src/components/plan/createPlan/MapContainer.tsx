import { useEffect, useState } from "react";
import styled from "styled-components";
import { createMap } from "../../../map/map";
import EditAndCreateButton from "../../templates/EditAndCreateButton";

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  height: auto;
`

const Map = styled.div`
  width: 100%;
  height: 200px;
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
  margin: 15px 0;

  &::placeholder {
    color: #bfbfbf;
    font-family: "SUIT-500";
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export default function MapContainer() {
  useEffect(() => {
    (async () => await createMap())();
    (async () => await createMap())();
  }, [])

  const [input, setInput] = useState("");

  const onChange = (e: any) => {
    setInput(e.target.value);
  }

  const onSubmit = () => {

  }

  return (
    <Container>
        <Input value={input} onChange={onChange} />
        <ButtonWrapper>
          <EditAndCreateButton text="확인" btnColor="orange" onClick={onSubmit} />
        </ButtonWrapper>
        <Map id="map"></Map>
    </Container>
  );
}