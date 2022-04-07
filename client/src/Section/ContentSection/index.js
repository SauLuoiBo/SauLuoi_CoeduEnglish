import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import * as Co from "./components";

export const ContentSection = () => {
  return (
    <Sui.View.ViewSection title={"Nội dung học Thú vị"} id="course">
      <Style.Wrapper>
        <Style.Card>
          <Sui.Card.Main
            w={"60rem"}
            title={"Giáo án đạt chuẩn"}
            text={
              "Giáo trình được biên soạn theo chuẩn nội dung của Oxford PhonicsWorld, giúp trẻ học được 26 chữ cái và 44 âm vị trong tiếng anh."
            }
          />
        </Style.Card>

        <Style.Card flex={"center"}>
          <Sui.Card.Main
            w={"40rem"}
            title={"Thời lượng"}
            text={
              "Khóa học kéo dài trong vòng 2-4 tháng 2-3 buổi/ tuần. 45 phút mỗi buổi học."
            }
          />
        </Style.Card>
        <Style.Card>
          <Sui.Card.Main
            w={"40rem"}
            title={"Nội dung "}
            text={
              "26 chữ cái, 44 âm vị, 15-20 cấu trúc câu và từ 300-500 từ vựng trong lộ trình học."
            }
          />
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
    margin: 20px 0;
  `,
};
