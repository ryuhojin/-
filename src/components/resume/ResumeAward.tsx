import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeAward = styled.div``;

const ResumeAward = () => {
  return (
    <>
      <ResumeFormTitle
        title={
          <>
            <span>수상이력</span>
          </>
        }
      >
        <>· 증빙가능한 수상이력만 제출하여 주시길 바랍니다.</>
      </ResumeFormTitle>
    </>
  );
};
export default ResumeAward;
