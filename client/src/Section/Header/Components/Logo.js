import React from "react";
import Link from "next/link";
import { Router } from "../../../assets/router";
import * as Functions from "../../../Functions";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Link href={Router.HOME}>
      <Style.Img src={Functions.getImage.getPng("LogoHome")} />
    </Link>
  );
};

const Style = {
  Img: styled.img`
    width: 200px;
    height: auto;
  `,
};
