import React from "react";
import styled from "styled-components";
import * as Co from "./Components";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import * as Hook from "../../hook";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = () => {
  const scrollPosition = Hook.useScrollPostion();
  return (
    <HideOnScroll>
      <Style.Wrapper className="container" c={scrollPosition > 200}>
        <Co.Logo />
        <Co.Navbar />
      </Style.Wrapper>
    </HideOnScroll>
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

    z-index: 1000;
    background: ${(props) => (props.c ? "#fefb00" : "none")};
  `,
};
