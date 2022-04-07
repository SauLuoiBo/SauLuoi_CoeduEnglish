import React from "react";
import styled from "styled-components";
import * as Co from "./Components";

export const HomeSection = () => {
  return (
    <Style.Wrapper id="home">
      <Style.Inner className="container">
        <Co.Content />
        <Co.ImageContent />
      </Style.Inner>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.section`
    padding-top: 300px;
  `,

  Inner: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;

    @media ${(props) => props.theme.breakpoints.md} {
      flex-direction: column;
    }
  `,
};
