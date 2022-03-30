import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.div`
    text-align:center;
    @media only screen and (max-width: 1024px) {
    text-align:left;
  }
`
const StyledTitle = styled.h1`
    margin:0;
`
const StyledContext = styled.h3`
`
const SubTitle = ({ title, context }: { title: string, context: JSX.Element }) => {
    return <>
        <StyledSubTitle>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledContext>
                {context}
            </StyledContext>
        </StyledSubTitle>
    </>
}
export default React.memo(SubTitle);