import styled from "styled-components";
import {
  ResumeCareer,
  ResumeIntro,
  ResumeSchool,
  ResumeProject,
  ResumeTech,
} from "./";
import ResumeLanguage from "./ResumeLanguage";
import ResumeLink from "./ResumeLink";
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
