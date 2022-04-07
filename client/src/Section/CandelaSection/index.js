import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import * as Co from "./components";
export const CandelaSection = () => {
  return (
    <Sui.View.ViewSection title={"Lịch học linh hoạt"} id="candela">
      <Style.Wrapper>
        {/* image */}
        <Co.ImgContent />
        {/* content */}
        <Style.Card>
          <Sui.Card.Main
            text={
              "Phụ huynh có thể cùng sắp xếp lịch học cùng giáo viên để trẻ có thời gian cân đối với việc học trên trường"
            }
          />
        </Style.Card>
        <Style.Card flex={"center"}>
          <Sui.Card.Main
            text={
              "Thời lượng mỗi buổi học phù hợp để giúp trẻ luôn tập trung tốt và mang lại hiệu quả cao."
            }
          />
        </Style.Card>
        <Style.Card flex={"flex-end"}>
          <Sui.Card.Main
            text={
              "Sau mỗi buổi học giáo viên sẽ đăng tải video buổi học lên file để phụ huynh có thể theo dõi lại quá trình học của con"
            }
          />
        </Style.Card>
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
    margin: 5rem;
  `,

  Card: styled.div`
    display: flex;
    width: 100%;
    justify-content: ${(props) => props.flex || "flex-start"};
  `,
};
