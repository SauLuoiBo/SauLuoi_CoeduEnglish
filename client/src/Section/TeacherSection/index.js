import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
export const TeacherSection = () => {
  return (
    <Sui.View.ViewSection title={"Giao vien Kinh nghiem"}>
      <Style.Wrapper>
        <Style.Card>
          <Sui.Card.Main />
        </Style.Card>
        <Style.Card flex={"flex-end"}>
          <Sui.Card.Main />
        </Style.Card>
        <Style.Teacher>
          <Sui.Card.Teacher />
          <Sui.Card.Teacher />
          <Sui.Card.Teacher />
          <Sui.Card.Teacher />
        </Style.Teacher>
      </Style.Wrapper>
    </Sui.View.ViewSection>
  );
};

const Style = {
  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
  `,

  Card: styled.div`
    display: flex;
    width: 100%;
    justify-content: ${(props) => props.flex || "flex-start"};
  `,
  Teacher: styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    align-items: flex-start;
  `,
};
