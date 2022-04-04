import styled from "styled-components";
import {
  ResumeIntro,
  ResumeSchool,
  ResumeCareer,
  ResumeProject,
  ResumeTech,
  ResumeLanguage,
  ResumeLink,
} from "./write";

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
        <ResumeTech />
        <ResumeLanguage />
        <ResumeLink />
      </StyledResumForm>
    </>
  );
};
export default ResumeForm;
