import React from "react";
import styled from "styled-components";
import * as Sui from "..";
import { getImage } from "../../Functions";

export const Teacher = ({ techer, exp }) => {
  return (
    <Style.Wrapper>
      <Style.Img src={getImage.getJpeg("teacher")} />
      <Style.Content>
        <Sui.Text.Normal.MediumBody>
          Giáo viên: {techer || "Phạm Thị Nga"}
        </Sui.Text.Normal.MediumBody>
        <Sui.Text.Normal.MediumBody>
          Kinh nghiệm: {exp}
        </Sui.Text.Normal.MediumBody>
      </Style.Content>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `,
  Img: styled.img`
    width: 100%;
    height: 30rem;
    border-radius: 20px;
    background-color: blue;
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
    transition: all 0.2s linear;
    :hover {
      transform: scale(1.05);
    }
  `,
  Content: styled.div`
    text-align: start;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
};
