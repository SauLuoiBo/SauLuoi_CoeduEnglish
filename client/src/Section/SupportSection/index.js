import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import { getImage } from "../../Functions";
import { motion } from "framer-motion";

export const SupportSection = () => {
  return (
    <Sui.View.ViewSection title={"Coedu english hỗ trợ gì?"} id={"support"}>
      <Style.Wrapper>
        <Style.ImgWrapper>
          <motion.div
            initial={{ rotate: -20, x: 0, y: -60 }}
            animate={{ rotate: 20, x: [0, 20, 200, 20, 0] }}
            transition={{ duration: 3, times: [0, 0.2, 1], yoyo: Infinity }}
          >
            <Style.Img src={getImage.getPng("fly")} />
          </motion.div>
        </Style.ImgWrapper>
        <Style.ContentWrapper>
          <Sui.Card.Support text={"Môi trường học tập 100% tiếng Anh"} />
          <Sui.Card.Support text={"Phần mềm bài tập trọn đời"} />
          <Sui.Card.Support text={"Video học của con sau mỗi buổi học"} />
          <Sui.Card.Support
            text={"Nhận xét định kì của thầy cô sau 3 buổi học"}
          />
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
    width: 500px;
    row-gap: 10px;
  `,
  ImgWrapper: styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    width: 500px;
    z-index: -1;
  `,
  Img: styled.img`
    width: 100%;
    height: auto;
  `,
};
