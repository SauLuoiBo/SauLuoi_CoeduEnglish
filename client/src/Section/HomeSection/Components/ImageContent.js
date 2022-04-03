import React from "react";
import styled from "styled-components";
import { getImage } from "../../../Functions";
import { motion } from "framer-motion";
export const ImageContent = () => {
  return (
    <Style.Wrapper>
      <motion.div
        initial={{ rotate: -20, opacity: 0.8 }}
        animate={{ rotate: 20, opacity: 1 }}
        transition={{ duration: 3, times: [0, 0.2, 1], yoyo: Infinity }}
      >
        <Style.Img src={getImage.getPng("ABC")} />
      </motion.div>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `,

  Img: styled.img`
    width: 80%;
  `,
};
