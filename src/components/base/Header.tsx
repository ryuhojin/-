import { darken, lighten } from "polished";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width:1728px;
  height: 60px;
  margin-left:auto;
  margin-right:auto;
  @media only screen and (max-width: 1919px) {
    width:1376px;
  }
  @media only screen and (max-width: 1440px) {
    width:1024px;
  }
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 2rem);
  }
`;

const StyledContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  color:#36558F;

`;

const StyledLogo = styled.h3`
  cursor: pointer;
  :hover {
    color: ${lighten(0.1, "#36558F")};
  }
`;

const StyledMenuList = styled.div`
  display: flex;
  div {
    cursor: pointer;
  }
  div:hover {
    color: ${lighten(0.1, "#36558F")};
  }
  div + div {
    margin-left: 1rem;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledLogo>레쥬메이트</StyledLogo>
          <StyledMenuList>
            <div>로그인</div>
          </StyledMenuList>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};
export default React.memo(Header);
