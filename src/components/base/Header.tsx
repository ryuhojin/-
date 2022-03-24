import { darken } from "polished";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  @media only screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
`;
const StyledLogo = styled.h3`
  cursor: pointer;
  :hover {
    color: ${darken(0.1, "#FFF")};
  }
`;

const StyledMenuList = styled.div`
  display: flex;
  div {
    cursor: pointer;
  }
  div:hover {
    color: ${darken(0.1, "#FFF")};
  }
  div + div {
    margin-left: 1rem;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>메이트</StyledLogo>
        <StyledMenuList>
          <div>회원가입</div>
          <div>로그인</div>
        </StyledMenuList>
      </StyledHeader>
    </>
  );
};
export default React.memo(Header);
