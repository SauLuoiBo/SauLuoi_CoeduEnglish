import React from "react";
import styled from "styled-components";
import * as Sui from "..";
export const PricingButton = ({ name, ...rest }) => {
  return (
    <Style.Wrapper {...rest}>
      <Sui.Text.Normal.MediumBody>
        {name || "Đăng ký"}
      </Sui.Text.Normal.MediumBody>
    </Style.Wrapper>
  );
};

PricingButton.Join = function Join({ name, ...rest }) {
  return (
    <Style.Wrapper2 {...rest}>
      <Sui.Text.Normal.MediumBody style={{ color: "white" }}>
        {name || "Đăng ký"}
      </Sui.Text.Normal.MediumBody>
    </Style.Wrapper2>
  );
};

const Style = {
  Wrapper: styled.button`
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: var(--color-background);

    :hover {
      transform: translateY(-5px);
    }
  `,

  Wrapper2: styled.button`
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: var(--color-title);

    :hover {
      transform: translateY(-5px);
    }
  `,
};
