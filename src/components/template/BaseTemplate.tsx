import styled from "styled-components";
const StyledBaseTemplate = styled.div`
  background:#fff;
  height:100%;
`;

const StyledContentTemplate = styled.div`
  width:1728px;
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
`

// {
//   children,
//   header,
// }: {
//   children: JSX.Element | JSX.Element[];
//   header: JSX.Element;
// }

const BaseTemplate = ({ children, header }: { children: JSX.Element | JSX.Element[], header: JSX.Element }) => {
  return (
    <StyledBaseTemplate>
      {header}
      <StyledContentTemplate>
        {children}
      </StyledContentTemplate>
    </StyledBaseTemplate>
  );
};
export default BaseTemplate;
