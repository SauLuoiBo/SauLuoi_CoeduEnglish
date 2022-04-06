import React from "react";
import styled from "styled-components";
import * as Sui from "..";

export const Footer = ({ name, children, ...rest }) => {
  return (
    <Style.Wrapper {...rest}>
      <Style.Title>
        <Sui.Text.Title.Medium>{name || "name"}:</Sui.Text.Title.Medium>
      </Style.Title>
      <Style.Value>{children}</Style.Value>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: inline-flex;
    flex-direction: row;
    width: 100%;
  `,
  Title: styled.div`
    display: block;
    width: ${(props) => props.w || "60px"};
  `,
  Value: styled.div`
    display: block;
  `,
};
