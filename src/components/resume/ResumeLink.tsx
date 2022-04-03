import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeLink = styled.div``;
const StyledLinkRow = styled.div`
  display: grid;
  grid-template-columns: minmax(6rem, auto) 1fr;
  grid-gap: .5rem;
  input {
    padding: 1rem;
    outline: none;
  }
`;
const StyledLinkAdd = styled.div`
  text-align: center;
  padding: .5rem 1rem;
  margin: 1rem 0;
  border: 3px dashed black;
`;

const ResumeLink = () => {
  return (
    <>
      <ResumeFormTitle
        title={
          <>
            <span>링크</span>
          </>
        }
      >
        <>· 자신을 나타낼 수 있는 링크를 입력해주세요.</>
      </ResumeFormTitle>
      <StyledResumeLink>
        <StyledLinkRow>
          <select>
            <option>깃허브</option>
            <option>블로그</option>
            <option>기타</option>
          </select>
          <input type="url" placeholder="주소" />
        </StyledLinkRow>
        <StyledLinkAdd>+</StyledLinkAdd>
      </StyledResumeLink>
      <br />
    </>
  );
};
export default ResumeLink;
