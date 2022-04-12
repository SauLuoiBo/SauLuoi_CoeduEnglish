import React from "react";
import styled from "styled-components";
import * as Co from "../../../components";

export const Content = () => {
  return (
    <Style.Wrapper>
      <Co.Text.Title.Title>Gia sư online cho trẻ</Co.Text.Title.Title>
      <Co.Text.Title.Head>
        Chi phí tối ưu, uy tín số 1 tại Việt Nam
      </Co.Text.Title.Head>
      <Co.Text.Normal.Medium>
        Coedu English cung cấp dịch vụ gia sư online 1: 1, 1: 2 hoặc nhóm nhỏ,
        giảng dạy ngoại ngữ cho trẻ từ 4 đến 12 tuổi{" "}
      </Co.Text.Normal.Medium>

      {/* <Co.Button.PricingButton.Join /> */}
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 500px;
  `,

  ButtonWrapper: styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;
  `,
};
