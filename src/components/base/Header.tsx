import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height:70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 2rem;
  @media only screen and (max-width: 1024px) {
    margin:0 1rem;
  }
`
const StyledLogo = styled.h3`

`
const StyledMenuList = styled.div`

`

const Header = () => {
  return <>
    <StyledHeader>
      <StyledLogo>메이트</StyledLogo>
      <StyledMenuList>
        <div>
          로그인
        </div>
      </StyledMenuList>
    </StyledHeader>
  </>;
};
export default React.memo(Header);
