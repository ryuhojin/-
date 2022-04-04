import styled from "styled-components";
import { lighten } from "polished";
import { useNavigate } from "react-router-dom";

const StyledResumeCard = styled.div`
  margin: 1rem;
  width: 20rem;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  @media only screen and (max-width: 1024px) {
    margin: 1rem;
    width: 100%;
  }
`;
const StyledResumDot = styled.div`
  margin: 0.5rem;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  border: 2px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  cursor: pointer;
  :hover {
    border: 2px dashed #36558f;
    background: ${lighten(0.55, "#36558F")};
    color: #36558f;
  }
`;
const ResumeCardPlus = () => {
  const navigate = useNavigate();

  const onClickPlusBtn = () => {
    navigate("/write");
  };
  return (
    <>
      <StyledResumeCard onClick={onClickPlusBtn}>
        <StyledResumDot>+</StyledResumDot>
      </StyledResumeCard>
    </>
  );
};
export default ResumeCardPlus;
