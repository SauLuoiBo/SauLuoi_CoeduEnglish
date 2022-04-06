import React from "react";
import styled from "styled-components";

export const Advise = ({ ...rest }) => {
  return (
    <Style.Wrapper>
      <Style.Input id="input" {...rest} />
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    border: solid 2px;
    border-color: var(--color-background);
    border-radius: 10px;
    padding-left: 20px;
    height: 4rem;
    min-width: 300px;
  `,
  Input: styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
  `,
};
