import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeTech = styled.div``;

const ResumeTech = () => {
  return (
    <>
      <ResumeFormTitle title={<span>기술스택</span>}>
        <>· 실제로 업무에 바로 사용가능한 기술역량을 적어주세요.</>
      </ResumeFormTitle>
    </>
  );
};
export default ResumeTech;
