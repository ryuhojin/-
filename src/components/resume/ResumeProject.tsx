import styled from "styled-components";
import ResumeFormTitle from "./ResumeFormTitle";
const StyledResumeProject = styled.div`
    
`

const ResumeProject = () => {
    return <>
        <ResumeFormTitle title={
            <>
                <span>프로젝트</span>
            </>}>
            <>
                · 상세 설명란에는 자신이 한 작업을 되도록 수치화 시켜서 적어주세요.
                <br />
                · ex) ○○을 맡아서 개발했으며 ○○작업을 통해 ○○을 ○만큼 개선했다.
                <br />
                · 기술스택란에는 자신이 해당 프로젝트에서 사용한 기술만 적어주세요.
            </>
        </ResumeFormTitle>
    </>
}
export default ResumeProject;