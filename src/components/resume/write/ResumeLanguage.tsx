import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeLanguage = styled.div``;
const StyledLanguageRow = styled.div`
  display: grid;
  grid-template-columns: minmax(6rem, auto) minmax(6rem, auto) minmax(6rem, auto) minmax(6rem, auto);
  grid-gap: 0.5rem;
  input {
    padding: 1rem;
    outline: none;
  }
`;
const StyledLanguageAdd = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border: 3px dashed black;
  cursor: pointer;
`;

const ResumeLanguage = () => {
  return (
    <>
      <ResumeFormTitle title={<span>어학</span>}>
        <>· 서류증빙이 가능한 어학성적을 입력해주세요.</>
      </ResumeFormTitle>
      <StyledResumeLanguage>
        <StyledLanguageRow>
        </StyledLanguageRow>
        <StyledLanguageAdd>+</StyledLanguageAdd>
      </StyledResumeLanguage>
    </>
  );
};
export default ResumeLanguage;
