import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";

export const CourseSection = () => {
  return (
    <Sui.View.ViewSection title={"Khoá học"} id="pricing">
      <Style.Wrapper>
        <Sui.Card.Course
          number={1}
          time={"1 tháng/ 8 buổi"}
          pricing={"1.490K"}
          content={"Học 6 chữ cái, 25 từ vựng  5-7 câu lệnh khác nhau."}
        />
        <Sui.Card.Course
          number={2}
          time={"2 tháng/ 16 buổi "}
          pricing={"2.490K"}
          content={
            "Học 12 chữ cái, 48 từ vựng liên quan, 5-10 câu lệnh khác nhau. "
          }
        />
        <Sui.Card.Course
          number={3}
          time={"4 tháng/ 35 buổi"}
          pricing={"4.990K"}
          content={
            "Học được 26 chữ cái, 104 từ vựng, 10- 20 câu lệnh khác nhau. "
          }
        />
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
