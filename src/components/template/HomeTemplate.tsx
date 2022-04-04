import styled from "styled-components";
const StyledHomeTemplate = styled.div`
  background: #fff;
  height: 100%;
`;

const StyledContentTemplate = styled.div`
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

const HomeTemplate = ({
  children,
  header,
}: {
  children: JSX.Element | JSX.Element[];
  header: JSX.Element;
}) => {
  return (
    <StyledHomeTemplate>
      {header}
      <StyledContentTemplate>{children}</StyledContentTemplate>
    </StyledHomeTemplate>
  );
};
export default HomeTemplate;
