import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

type ParallelContentItemType = {
  plan: any;
}

const Container = styled.div<{ url: string }>`
  height: 165px;
  width: 200px; 
  border-radius: 15px;
  background: 
    linear-gradient(180deg, rgba(180, 180, 180, 0.26) 19.7%, rgba(0, 0, 0, 0.58) 100%), 
    url(${props => props.url !== "" ? props.url : "https://cdn.pixabay.com/photo/2017/10/26/19/45/red-2892235_1280.png"});
  background-size: cover;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }
`

const SubText = styled.div`
  color: #FFFFFF;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 5px;
  font-family: 'SUIT-500';
`

const MainText = styled.div`
  color: #FFFFFF;
  font-size: 20px;
  line-height: 25px;
  text-overflow: ellipsis;
  height: 25px;
  width: 100%;
  overflow: hidden;
`

export default function ParallelContentItem({ plan }: ParallelContentItemType) {
  const planURL = `plan/${plan.id}`;
  const router = useRouter();
  const onClick = () => {
    router.push(planURL);
  }
  
  return (
      <Container onClick={onClick} url={plan.schdules[0].img ? plan.schdules[0].img.thumbnail : ""}>
        <SubText>{plan.intro}</SubText>
        <MainText>{plan.title}</MainText>
      </Container>
  );
}