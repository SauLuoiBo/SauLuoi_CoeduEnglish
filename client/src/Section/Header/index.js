import React from "react";
import styled from "styled-components";
import * as Co from "./Components";

export const Header = () => {
  return (
    <Style.Wrapper className="container">
      <Co.Logo />
      <Co.Navbar />
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin: 20px 0;
    z-index: 1000;
    /* background: #fefb00; */
  `,
};
