import styled from "styled-components";
import ResumeCard from "./ResumeCard";
import ResumeCardPlus from "./ResumeCardPlus";

const StyledResumeList = styled.div`
    flex : 1 1 0%;
`
const StyledCardList = styled.div`
    margin: -1rem;
    display:flex;
    flex-wrap:wrap;
`
const StyledCardCount = styled.h4`
    text-align:end;
`
// const StyledSearchBox = styled.div`
//     border-radius: 15px;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap:1rem;
//     @media only screen and (max-width: 1024px) {
//         grid-template-columns: 1fr;
//         grid-gap:0.5rem;
//   }

//     input{
//         height:40px;
//         border:1px solid #a1a1a1;
//         padding-left:0.5rem;
//         border-radius:5px;
//         font-size:1rem;
//         background-color: #fafafa;
//     }
//     select {
//         height:44px;
//         padding:2px 1px;
//         font-size:1rem;
//         border:1px solid #a1a1a1;
//         border-radius:5px;
//         background-color: #fafafa;

//     }
// `

// const StyledSearchFilter = styled.div`
//     margin-top:1rem;
//     display:flex;
//     justify-content: flex-end;
// `




{/* <StyledSearchBox>
                <input type="number" min="1000" max="9999" step="1" placeholder="작성 년도" />
                <input type="text" placeholder="내용" />
            </StyledSearchBox>
            <StyledSearchFilter>
                <span>
                    정렬
                </span>
            </StyledSearchFilter> */}
const ResumeList = () => {
    return <>
        <StyledResumeList>
            <StyledCardCount>총 12개의 이력서</StyledCardCount>
            <StyledCardList>
                <ResumeCardPlus />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </StyledCardList>
        </StyledResumeList>
    </>
}
export default ResumeList;