import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledTeamList = styled.div`
    padding: 0rem 10rem 1.25rem;
    @media only screen and (max-width: 1024px) {
        padding: 0rem 1.5rem 1.25rem;
    }
`
const StyledSearchTeam = styled.div`
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:1rem;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap:0.5rem;
  }

    input{
        height:40px;
        border:1px solid #a1a1a1;
        padding-left:0.5rem;
        border-radius:5px;
        font-size:1rem;
        background-color: #fafafa;
    }
    select {
        height:44px;
        padding:2px 1px;
        font-size:1rem;
        border:1px solid #a1a1a1;
        border-radius:5px;
        background-color: #fafafa;

    }
`

const StyledSearchFilter = styled.div`
    margin-top:1rem;
    display:flex;
    justify-content: space-between;
`

const StyledProjectList = styled.div`
    margin-top:1rem;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows:auto;
    grid-gap:1rem;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`



const TeamList = () => {
    return <>
        <StyledTeamList>
            <StyledSearchTeam>
                <select>
                    <option>팀 전체</option>
                    <option>프로젝트</option>
                    <option>스터디</option>
                </select>
                <select>
                    <option>경력</option>
                    <option>대학생</option>
                    <option>주니어(1~3년)</option>
                    <option>시니어(3~8년)</option>
                </select>
                <input type="text" placeholder="기술 스택" />
                <input type="text" placeholder="팀 이름" />
            </StyledSearchTeam>
            <StyledSearchFilter>
                <span>
                    <input type="checkbox" style={{ background: 'blue' }} />
                    <label> 마감된 팀 안보기</label>
                </span>
                <span>
                    정렬
                </span>
            </StyledSearchFilter>
            <StyledProjectList>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </StyledProjectList>
        </StyledTeamList>
    </>
}
export default TeamList;