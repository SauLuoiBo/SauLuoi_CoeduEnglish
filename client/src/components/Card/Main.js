import React from "react";
import styled from "styled-components";
import * as Sui from "..";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const Main = ({ title, text, ...rest }) => {
  return (
    <Style.Wrapper {...rest}>
      <Sui.Text.Title.Head>{title || "title"}</Sui.Text.Title.Head>
      <Sui.Text.Normal.Medium>
        {text || lorem.generateWords(30)}
      </Sui.Text.Normal.Medium>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    align-items: flex-start;
    width: ${(props) => props.w || "300px"};
    max-width: ${(props) => props.mw || "100%"};
    max-width: 100%;
    background: linear-gradient(0deg, #fefb00 -98.15%, #ffffff 156.48%);
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    margin: 1rem;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.2s linear;
    :hover {
      transform: scale(1.05);
      opacity: 1;
    }
  `,
};
