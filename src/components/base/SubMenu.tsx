import { lighten } from "polished";
import styled from "styled-components";

const StyledSubMenu = styled.div`
  height: 100px;
  background: ${lighten(0.3, "#E85F5C")};
  display: flex;
  justify-content: center;
`;

const SubMenu = () => {
  return (
    <>
      <StyledSubMenu>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledSubMenu>
    </>
  );
};
export default SubMenu;
