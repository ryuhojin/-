import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeLink = styled.div``;
const StyledLinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  input,
  select {
    line-height: 1.125rem;
    font-size: 1.25rem;
    padding: 1rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid #e1e1e1;
  }
  select {
  }
  input:last-child {
    flex-grow: 1;
    margin-left: 1rem;
  }
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
            <option>GITHUB</option>
            <option>BLOG</option>
            <option>ETC</option>
          </select>
          <input type="text" placeholder="주소" />
        </StyledLinkRow>
      </StyledResumeLink>
      <br />
    </>
  );
};
export default ResumeLink;
