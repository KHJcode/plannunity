import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../modules";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import { setActive, unsetActive } from "../../../../modules/isActive";
import React, { useRef, useState } from "react";
import { addSchdule } from "../../../../modules/schdule";
import { clearPlace } from "../../../../modules/currentData";
import IconSVG from "../../../templates/IconSVG";

const Container = styled.div`
  background: #ffffff;
  padding: 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const MainText = styled.div`
  font-size: 22px;
  line-height: 35px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
`;

const Label = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const Input = styled.input`
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #ededed;
  font-size: 15px;
  line-height: 20px;
  border: none;
  padding: 15px;
  border-radius: 12px;

  &::placeholder {
    color: #bfbfbf;
    font-family: "SUIT-500";
  }
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: center;
`;

const SeqBox = styled.div`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  height: 50px;
  padding: 15px 26px;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const PhotoWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const PhotoButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoThumbnail = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 12px;
  object-fit: cover;
`

export type UploadImg = {
  thumbnail: string;
  type: string;
}

export default function SchduleAddModal() {
  const schdules = useSelector((state: RootState) => state.schdule);
  const place = useSelector((state: RootState) => state.currentData.place);
  const dispatch = useDispatch();
  const imgButton = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<UploadImg | null>()

  const onClickCancelButton = () => {
    dispatch(unsetActive("schduleAdd"));
    dispatch(clearPlace());
    setTitle("");
    setDesc("");
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(""); 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.id === "title") setTitle(e.target.value);
    else if(e.currentTarget.id === "desc") setDesc(e.target.value);
  }

  const onClickSubmitButton = () => {
    if(imgFile) {
      console.log(imgFile);
      console.log(place);
      dispatch(addSchdule(title, desc, schdules.length + 1, place!, imgFile));
      setImgFile(null);
    } else {
      dispatch(addSchdule(title, desc, schdules.length + 1, place!, null));
    }
    dispatch(unsetActive("schduleAdd"));
    dispatch(clearPlace());
    setImgFile(null);
    setTitle("");
    setDesc("");
  }

  const onClickPhotoButton = () => {
    imgButton.current?.click();
  }

  const onFocusLocInput = () => {
    dispatch(setActive("searchPlace"));
  }

  const uploadImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if(fileList && fileList[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(fileList[0])
      reader.onload = () => {
        console.dir(reader.result);
        setImgFile({
          thumbnail: (reader.result)!.toString(),
          type: fileList[0].type.slice(0, 5),
        });
      }
      // const url = URL.createObjectURL(fileList[0]);
      // console.log(url);
    }
  }

  return (
    <Container>
      <TopWrapper>
        <MainText>
          일정에 추가하실
          <br />
          정보를 입력하세요
        </MainText>
        <IconSVG
          imageId="cancel"
          width={24}
          height={24}
          onClick={onClickCancelButton}
        />
      </TopWrapper>
      <InputWrapper>
        <Label>이미지(선택)</Label>
        <PhotoWrapper>
          <PhotoButton onClick={onClickPhotoButton}>
            <img src="images/camera.svg" style={{ "padding": "20px" }} />
            <input type="file" accept="image/jpg, image/jpeg, image/png" style={{ "display": "none" }} ref={imgButton} onChange={uploadImgFile} />
          </PhotoButton>
          {imgFile && <PhotoThumbnail src={imgFile.thumbnail} />}
        </PhotoWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>일정 위치</Label>
        <Input placeholder="일정 위치를 입력해주세요." value={place ? place.place_name : ""} onFocus={onFocusLocInput} id="desc" readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>일정 제목</Label>
        <Input placeholder="일정 제목을 입력해주세요" value={title} onChange={onChange} id="title" />
      </InputWrapper>
      <InputWrapper>
        <Label>세부 정보</Label>
        <Input placeholder="세부 정보를 입력해주세요" value={desc} onChange={onChange} id="desc" />
      </InputWrapper>
      <SelectBoxWrapper>
        <Label>일정 순서</Label>
        <SeqBox>{schdules.length + 1}번째</SeqBox>
      </SelectBoxWrapper>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 일정 순서 추가하기"
          btnColor="orange"
          onClick={onClickSubmitButton}
        />
      </ButtonWrapper>
    </Container>
  );
}
