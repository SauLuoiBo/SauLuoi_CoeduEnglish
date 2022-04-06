import styled from "styled-components";

export const Title = {
  Head: styled.h3`
    font-weight: 800;
    line-height: 119%;
    text-transform: capitalize;
    letter-spacing: -0.05em;
    font-size: 20px;
    color: var(--color-title);
  `,

  Medium: styled.h5`
    font-weight: 600;
    line-height: 119%;

    letter-spacing: -0.05em;
    font-size: 16px;
    color: var(--color-title);
  `,
  Title: styled.h2`
    text-transform: uppercase;
    font-weight: 800;
    font-size: 32px;
    color: var(--color-title);
    line-height: 119%;
  `,
  CaptionBody: styled.h2`
    text-transform: uppercase;
    font-weight: 800;
    font-size: 24px;
    color: var(--color-title);
    line-height: 119%;
  `,
};
