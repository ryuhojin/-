import { lighten } from "polished"
import styled from "styled-components"

const StyledResumeCard = styled.div`
    margin:1rem;
    width:20rem;
    box-sizing: border-box;
    overflow:hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    @media only screen and (max-width: 1024px) {
        margin: 1rem;
        width:100%;
    }
`
const StyledResumDot = styled.div`
    margin:.5rem;
    width:-webkit-fill-available;
    height:-webkit-fill-available;
    border:2px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:2.25rem;
    cursor:pointer;
    :hover{
        border:2px dashed #36558F;
        background:${lighten(0.55, '#36558F')} ;
        color:#36558F;
    }
`
const ResumeCardPlus = () => {
    return <>
        <StyledResumeCard>
            <StyledResumDot>
                +
            </StyledResumDot>
        </StyledResumeCard>
    </>
}
export default ResumeCardPlus;