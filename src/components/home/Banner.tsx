import styled from "styled-components";
import { lighten } from "polished";

const StyledBanner = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${lighten(0.2, "black")};
`;

const Banner = () => {
  return (
    <>
      <StyledBanner></StyledBanner>
    </>
  );
};
export default Banner;
