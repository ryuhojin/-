import styled from "styled-components";
const StyledBaseTemplate = styled.div`
  background: #fff;
  height: 100%;
`;

const StyledSubTitleTemplate = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 1919px) {
    width: 1376px;
  }
  @media only screen and (max-width: 1440px) {
    width: 1024px;
  }
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 2rem);
  }
`;

const StyledContentTemplate = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 2rem);
  }
`;

const BaseTemplate = ({
  children,
  header,
  subtitle,
}: {
  children: JSX.Element | JSX.Element[];
  header: JSX.Element;
  subtitle: JSX.Element;
}) => {
  return (
    <StyledBaseTemplate>
      {header}
      <StyledSubTitleTemplate>{subtitle}</StyledSubTitleTemplate>
      <StyledContentTemplate>{children}</StyledContentTemplate>
    </StyledBaseTemplate>
  );
};
export default BaseTemplate;
