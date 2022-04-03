import React from "react";
import styled from "styled-components";
import { Text } from "..";

export const ViewSection = ({ title, children }) => {
  return (
    <Style.Wrapper className="container">
      <Style.Title>
        <Text.Title.Title>{title || "title"}</Text.Title.Title>
      </Style.Title>

      <Style.Content>{children}</Style.Content>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
  `,

  Title: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `,

  Content: styled.div`
    display: block;
    width: 100%;
    margin: 20px 0;
  `,
};
