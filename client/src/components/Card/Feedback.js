import React from "react";
import styled from "styled-components";
import * as Sui from "..";
import { getImage } from "../../Functions";

export const Feedback = () => {
  return (
    <Style.Wrapper>
      <Sui.Icon.User src={getImage.getJpeg("phuhunh")} />
      <Style.ContentWrapper>
        <Sui.Text.Title.Head>Chi Nga</Sui.Text.Title.Head>
        <Sui.Text.Normal.Medium style={{ color: "yellow" }}>
          adsasda adsdas{" "}
        </Sui.Text.Normal.Medium>
      </Style.ContentWrapper>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    max-width: 100%;
    width: 300px;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    justify-content: flex-start;
    border: solid 1px;
    border-color: var(--color-primary);
    box-shadow: 6px 4px 6px 7px rgba(160, 179, 45, 0.25);
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};
