import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.div`
    padding: 2rem 4rem 1.25rem;
    text-align:center;
    @media only screen and (max-width: 1024px) {
    text-align:left;
    padding: 2rem 1.5rem 1.25rem;
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