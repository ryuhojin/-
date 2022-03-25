import styled from "styled-components";
import { GoRequestChanges, GoReport, GoProject, GoOrganization, GoArchive} from 'react-icons/go'
const StyledSubMenu = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  border-bottom:1px solid #e1e1e1;
  margin:0.1rem;
  .active {
    color: #4D7298;
    border-bottom: 2px solid #4D7298;
    transition: all 0.1s linear;
  }
`;
const StyledMenuItem = styled.div`
  padding:0.8rem 1rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    color:#4D7298;
  }
  span{
    margin-top:0.3rem;
  }
  @media only screen and (max-width: 1024px) {
    padding:0.4rem 0.5rem;
  }
`
const SubMenu = () => {
  return (
    <>
      <StyledSubMenu>
        <StyledMenuItem className="active"><GoProject size={30} /><span>팀 공고</span></StyledMenuItem>
        <StyledMenuItem><GoReport size={30} /><span>받은 제안</span></StyledMenuItem>
        <StyledMenuItem><GoRequestChanges size={30} /><span>보낸 요청</span></StyledMenuItem>
        <StyledMenuItem><GoOrganization size={30} /><span>팀 생성</span></StyledMenuItem>
        <StyledMenuItem><GoArchive size={30} /><span>메이터</span></StyledMenuItem>
      </StyledSubMenu>
    </>
  );
};
export default SubMenu;
