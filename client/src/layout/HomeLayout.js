import React from "react";
import styled from "styled-components";
import * as Section from "../Section";
export const HomeLayout = ({ children }) => {
  return (
    <Style.Wrapper>
      <Section.Header />
      <Style.Main>{children}</Style.Main>
      <Section.Footer />
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    background: linear-gradient(
      179.97deg,
      rgba(255, 252, 41, 0.9) -0.89%,
      #ffd85e 9.33%,
      #fbda9b 51.73%,
      #ffe175 67.57%,
      #faec87 97.2%
    );
  `,

  Main: styled.main`
    overflow-x: hidden;
  `,
};
