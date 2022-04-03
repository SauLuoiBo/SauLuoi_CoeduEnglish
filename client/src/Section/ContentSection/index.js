import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import * as Co from "./components";

export const ContentSection = () => {
  return (
    <Sui.View.ViewSection title={"Nội dung học Thú vị"}>
      <Style.Wrapper>
        <Style.Card>
          <Sui.Card.Main />
        </Style.Card>

        <Style.Card flex={"center"}>
          <Sui.Card.Main />
        </Style.Card>
        <Style.Card flex={"flex-end"}>
          <Sui.Card.Main />
        </Style.Card>

        {/* video */}

        <Co.VideoContent />
        {/* image */}
        <Co.ImgContent />
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
};
