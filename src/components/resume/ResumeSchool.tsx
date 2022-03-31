import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeSchool = styled.div`
    
`

const ResumeSchool = () => {
    return <>
        <ResumeFormTitle title={
            <>
                <span>학력</span>
            </>}>
            <>
                · 학력은 가장 최신 순으로 입력해주시면 됩니다.
            </>
        </ResumeFormTitle>
    </>
}
export default ResumeSchool;