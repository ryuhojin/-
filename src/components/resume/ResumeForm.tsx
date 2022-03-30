import styled from "styled-components";
import ResumeIntro from "./ResumIntro";

const StyledResumForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const ResumeForm = () => {
  return (
    <>
      <StyledResumForm>
        <ResumeIntro />
      </StyledResumForm>
    </>
  );
};
export default ResumeForm;
