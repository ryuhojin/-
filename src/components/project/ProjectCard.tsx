import styled from "styled-components"

const StyledProjectCard = styled.div`
    padding:.5rem;
    border:1px solid #a1a1a1;
    border-radius:5px;
    display:flex;
`
const StyledProjectImage = styled.div` 
    width:35%;
    flex-shrink: 0;
    margin-right:.5rem;
    background: #e1e1e1;
    @media only screen and (max-width: 1340px) {
        display: none;
    }
`
const StyledProjectContents = styled.div`

`
const StyledProjectTitle = styled.h4`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin:0;
   
`
const StyledProjectClass = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow:hidden;
    color:#777;
    margin: 0.3rem 0 0 0;
`

const StyledProjectMember = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow:hidden;
    color:#777;
    margin: 0;
`

const StyledProjectTag = styled.ul`
    margin: .5rem 0 0 0;
    list-style: none;
    overflow:hidden;
    display: -webkit-box;
    color:#fff;
    font-size: .9rem;
    padding:0;
    li{
        border:1px solid #4D7298;
        border-radius:5px;
        background-color:#4D7298;
        padding:0.2rem 0.4rem;
    }
    li + li{
        margin-left:0.2rem;
    }
`
const StyledProjectSubtitle = styled.p`
    font-size: .9rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow:hidden;
    color:#777;
    margin: .5rem 0 0 0;
`


const ProjectCard = () => {
    return <>
        <StyledProjectCard>
            <StyledProjectImage>
            </StyledProjectImage>
            <StyledProjectContents>
                <StyledProjectTitle>이곳은 프로젝트 제목입니다. 최대 한줄까지 표현되는 공간입니다.</StyledProjectTitle>
                <StyledProjectSubtitle>안녕하세요 이것은 프로젝트 간략설명입니다. 간략설명은 최대 2줄까지보이며 기타내용은 보이지 않을 수 있습니다. 이것을 참조하여 개발해주시면 감사합니다.</StyledProjectSubtitle>
                <StyledProjectClass>분류 : 프로젝트 / 주제 : 알고리즘</StyledProjectClass>
                <StyledProjectMember>Front-End 1 / 3 | Back-End 3 / 3 | Designer 1 / 1</StyledProjectMember>
                <StyledProjectTag>
                    <li>안녕</li><li>프로젝트는</li><li>처음이지?</li>
                    <li>안녕</li><li>프로젝트는</li><li>처음이지?</li>
                    <li>안녕</li><li>프로젝트는</li><li>처음이지?</li>
                </StyledProjectTag>
            </StyledProjectContents>
            {/* 
            <StyledProjectContents>
               
                
               
            </StyledProjectContents> */}
        </StyledProjectCard>
    </>
}
export default ProjectCard;