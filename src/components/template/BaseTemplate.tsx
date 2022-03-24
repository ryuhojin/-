import styled from "styled-components";
const StyledBaseTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeaderArea = styled.div`
  position: fixed;
  width: 100%;
  background: #E85F5C;
  color: #FFF;
`;

const MarginTop80 = styled.div`
  margin-top: 60px;
`;

const BaseTemplate = ({
  children,
  header,
}: {
  children: JSX.Element | JSX.Element[];
  header: JSX.Element;
}) => {
  return (
    <StyledBaseTemplate>
      <StyledHeaderArea>{header}</StyledHeaderArea>
      <MarginTop80></MarginTop80>
      {children}
    </StyledBaseTemplate>
  );
};
export default BaseTemplate;
