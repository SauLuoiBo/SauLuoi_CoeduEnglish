import React from "react";
import styled from "styled-components";

export const Social = ({ src, alt, ...rest }) => {
  return (
    <Style.Wrapper {...rest}>
      <img src={src} alt={alt} />
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    img {
      width: 100%;
    }
  `,
};
