import styled from "styled-components";
import { lighten } from "polished";

const StyledResumeFormHeader = styled.h3`
    display:flex;
    justify-content: space-between;
    align-items: center;

    span:nth-child(2){
        font-size:1rem;
        align-items:center;
    }
`
const StyledReusmeFormParagraph = styled.p`
    margin-top: 0;
    padding: 1rem;
    background-color: ${lighten(0.4, "#446bb4")};
`


const ResumeFormTitle = (
    { title, children }: { title: JSX.Element, children: JSX.Element }
) => {
    return <>
        <StyledResumeFormHeader>
            {title}
        </StyledResumeFormHeader>
        <StyledReusmeFormParagraph>
            {children}
        </StyledReusmeFormParagraph>
    </>
}
export default ResumeFormTitle;