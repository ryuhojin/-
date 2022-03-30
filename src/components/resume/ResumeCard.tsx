import styled from "styled-components"

const StyledResumeCard = styled.div`
    margin:1rem;
    width:20rem;
    cursor:pointer;
    overflow:hidden;
    flex-direction: column;
    display: flex;
    border-radius: 4px;
    background:#f1f1f1;
    :hover{
        color:#36558F;
        background-color: #f8f8f8;
    }
    @media only screen and (max-width: 1024px) {
        margin: 1rem;
        width:100%;
    }
`
const StyledResumeDate = styled.h1`
    margin:0;   
    padding:4rem 0;
    background-color:#e1e1e1;
    text-align:center;
`
const StyledResumeMemo = styled.h4`
    text-align:center;
`
const StyleResumseClose = styled.span`
    cursor:pointer;
    text-align:center;
    padding:.5rem 0;
    background:#e1e1e1;
    :hover{
        background:#e8e8e8;
    }
`
const ResumeCard = () => {
    return <>
        <StyledResumeCard>
            <StyledResumeDate>
                메모없음
            </StyledResumeDate>
            <StyledResumeMemo>
                작성일 : 2022.11.22
            </StyledResumeMemo>
            <StyleResumseClose>삭제</StyleResumseClose>
        </StyledResumeCard>
    </>
}
export default ResumeCard;