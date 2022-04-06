import React from "react";
import styled from "styled-components";
import * as Sui from "..";

export const Support = ({ text }) => {
  return (
    <Style.Wrapper>
      <Sui.Text.Normal.MediumBody>{text}</Sui.Text.Normal.MediumBody>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    padding: 0.5rem;
    background: linear-gradient(0deg, #fefb00 -98.15%, #ffffff 156.48%);
    border-radius: 10px;
    width: fit-content;
  `,
};
