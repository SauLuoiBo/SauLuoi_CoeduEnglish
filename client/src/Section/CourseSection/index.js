import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import * as Co from "./components";

export const CourseSection = () => {
  return (
    <Sui.View.ViewSection title={"Khoá học"}>
      <Style.Wrapper>
        <Sui.Card.Course />
        <Sui.Card.Course />
        <Sui.Card.Course />
      </Style.Wrapper>
    </Sui.View.ViewSection>
  );
};

const Style = {
  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    column-gap: 30rem;
    row-gap: 5rem;
    z-index: 0;
    margin-top: 10rem;
  `,

  Card: styled.div`
    display: flex;
    width: 100%;
    justify-content: ${(props) => props.flex || "flex-start"};
  `,
};
