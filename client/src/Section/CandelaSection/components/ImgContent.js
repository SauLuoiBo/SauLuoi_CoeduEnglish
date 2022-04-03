import React from "react";
import styled from "styled-components";
import { getImage } from "../../../Functions";
import { motion } from "framer-motion";

export const ImgContent = () => {
  return (
    <Style.Wrapper>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-50, 0, 50] }}
        transition={{ duration: 3, times: [0, 0.2, 1], yoyo: Infinity }}
      >
        <Style.Img src={getImage.getPng("lich")} />
      </motion.div>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    right: 0;
    width: 300px;
  `,

  Img: styled.img`
    width: 100%;
  `,
};
