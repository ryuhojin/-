import styled from "styled-components";
const StyledBaseTemplate = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledHeaderArea = styled.div`
  position: fixed;
  width:100%;
  background: #fff;
`

const MarginTop80 = styled.div`
  margin-top:70px;
`

const BaseTemplate = ({ children, header }: { children: JSX.Element | JSX.Element[], header: JSX.Element }) => {
  return <StyledBaseTemplate>
    <StyledHeaderArea>{header}</StyledHeaderArea>
    <MarginTop80></MarginTop80>
    {children}
  </StyledBaseTemplate>;
};
export default BaseTemplate;
