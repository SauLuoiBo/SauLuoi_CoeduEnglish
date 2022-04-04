import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";

export const SupportSection = () => {
  return (
    <Sui.View.ViewSection title={"Coedu english hỗ trợ gì?"}>
      <Style.Wrapper>
        <Style.ContentWrapper>
          <Sui.Card.Support />
          <Sui.Card.Support />
          <Sui.Card.Support />
        </Style.ContentWrapper>
      </Style.Wrapper>
    </Sui.View.ViewSection>
  );
};

const Style = {
  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    column-gap: 30rem;
    row-gap: 5rem;
    z-index: 0;
    margin-top: 2rem;
  `,

  Card: styled.div`
    display: flex;
    width: 100%;
    justify-content: ${(props) => props.flex || "flex-start"};
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 400px;
    row-gap: 10px;
  `,
};
