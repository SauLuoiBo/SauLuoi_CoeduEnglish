import React from "react";
import styled from "styled-components";

export const VideoContent = () => {
  return (
    <Style.Wrapper>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0ksLUQVYzEw"
        title="Giới thiệu Coedu English"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 20rem;
  `,
};
