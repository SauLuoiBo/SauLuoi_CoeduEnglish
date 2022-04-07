import React from "react";
import styled from "styled-components";

export const User = ({ src, alt, ...rest }) => {
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
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  `,
};
