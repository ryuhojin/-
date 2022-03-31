import styled from "styled-components";
import { ResumeCareer, ResumeIntro, ResumeSchool } from "./";
import ResumeProject from "./ResumeProject";
const StyledResumForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const ResumeForm = () => {
  return (
    <>
      <StyledResumForm>
        <ResumeIntro />
        <ResumeSchool />
        <ResumeCareer />
        <ResumeProject />
      </StyledResumForm>
    </>
  );
};
export default ResumeForm;
