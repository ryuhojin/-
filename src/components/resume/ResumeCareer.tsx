import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeCareer = styled.div`
    
`

const ResumeCareer = () => {
    return <>
        <ResumeFormTitle title={
            <>
                <span>경력</span>
            </>}>
            <>
                · 경력은 가장 최신 순으로 입력해주시면 됩니다.
            </>
        </ResumeFormTitle>
    </>
}
export default ResumeCareer;