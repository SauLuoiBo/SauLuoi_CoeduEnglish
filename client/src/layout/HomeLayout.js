import React from "react";
import styled from "styled-components";

export const HomeLayout = ({ children }) => {
  return <Style.Wrapper>{children}</Style.Wrapper>;
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
};
