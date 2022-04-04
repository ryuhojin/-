import styled from "styled-components";
import { ResumeCard, ResumeCardPlus } from "./list";

const StyledResumeList = styled.div`
  flex: 1 1 0%;
`;
const StyledCardList = styled.div`
  margin: -1rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledCardCount = styled.h4`
  text-align: end;
`;
const ResumeList = () => {
  return (
    <>
      <StyledResumeList>
        <StyledCardCount>총 12개의 이력서</StyledCardCount>
        <StyledCardList>
          <ResumeCardPlus />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </StyledCardList>
      </StyledResumeList>
    </>
  );
};
export default ResumeList;
