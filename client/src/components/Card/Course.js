import React from "react";
import styled from "styled-components";
import * as Sui from "..";

export const Course = ({ number, pricing, time, content }) => {
  return (
    <Style.Wrapper>
      <Style.HeadWrapper>
        <Style.NameCourse>
          <Sui.Text.Title.CaptionBody>PHONICS</Sui.Text.Title.CaptionBody>
          <Sui.Text.Title.CaptionBody>{number}</Sui.Text.Title.CaptionBody>
        </Style.NameCourse>
        <Style.PricingWrapper>
          <Style.TextPricing>{pricing}</Style.TextPricing>
        </Style.PricingWrapper>
      </Style.HeadWrapper>
      <Sui.Text.Normal.MediumBody>
        Thời lượng: {time}
      </Sui.Text.Normal.MediumBody>
      <Sui.Text.Normal.Medium>{content}</Sui.Text.Normal.Medium>
      <Style.ButtonWrapper>
        <Sui.Button.PricingButton onClick={() => console.log("click")} />
      </Style.ButtonWrapper>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: flex-start;
    width: ${(props) => props.w || "300px"};
    max-width: 100%;
    background: #feffca;
    box-shadow: 0px 0px 13px #fefb00,
      inset 10px 20px 30px -2px rgba(255, 255, 255, 0.56);
    border-radius: 20px;
    margin: 1rem;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.2s linear;
    :hover {
      transform: scale(1.05);
      opacity: 1;
    }
  `,

  TextPricing: styled(Sui.Text.Title.CaptionBody)`
    color: var(--color-primary);
  `,
  HeadWrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    align-items: stretch;
    margin-bottom: 2rem;
  `,
  NameCourse: styled.div`
    display: block;
    text-align: center;
    padding-bottom: 10px;
  `,
  PricingWrapper: styled.div`
    display: flex;
    align-items: flex-end;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
  `,
};
