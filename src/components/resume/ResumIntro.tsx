import { lighten } from "polished";
import styled from "styled-components";
const StyledH3 = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:last-child {
    font-size: 1rem;
    color: #446bb4;
  }
`;
const StyledParagraph = styled.p`
  margin-top: 0;
  padding: 1rem;
  background-color: ${lighten(0.4, "#446bb4")};
`;
const StyledTextarea = styled.textarea`
  padding: 1rem 0 0.1rem 0;
  font-size: 1.125rem;
  outline: none;
  border: 0;
  overflow: hidden;
  -webkit-appearance: none;
  resize: none;
  caret-color: #000;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  ::placeholder {
    font-size: 1rem;
    color: #ccc;
    font-weight: 600;
  }
`;

const ResumeIntro = () => {
  return (
    <>
      <StyledH3>
        <span>자기소개</span>
        <span>
          글자수 제한 (300 자)
          <input type="checkbox" />
        </span>
      </StyledH3>
      <StyledParagraph>
        · 5줄 정도의 간략한 소개를 적어 자신은 어떤 개발자이고 어떤 가치관을
        가지고 있는지에 대해서 적어주시면 됩니다.
        <br />· 글자수 제한걸기를 통해 지나치게 길어지지 않게 조절해주세요.
      </StyledParagraph>
      <StyledTextarea
        placeholder="이곳은 자기소개를 쓰는 칸입니다. 개발자 동료 여러분의 자기소개를 통해 가치를 올려보세요."
        onKeyDown={(e) => {
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
        }}
      />
    </>
  );
};
export default ResumeIntro;
