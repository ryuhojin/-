import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeLanguage = styled.div`
    
`

const ResumeLanguage = () => {
    return <>
        <ResumeFormTitle title={
            <>
                <span>어학</span>
            </>}>
            <>
                · 서류증빙이 가능한 어학성적을 입력해주세요.
            </>
        </ResumeFormTitle>
    </>
}
export default ResumeLanguage;