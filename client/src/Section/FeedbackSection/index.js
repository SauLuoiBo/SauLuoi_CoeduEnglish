import React from "react";
import * as Sui from "../../components";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";
export const FeedbackSection = () => {
  SwiperCore.use([EffectFade, Pagination, Autoplay]);
  return (
    <Style.Wrapper className="container">
      <Style.Title>
        <Sui.Text.Title.Title>
          Phản hồi từ giáo viên và phụ huynh
        </Sui.Text.Title.Title>
      </Style.Title>
      <Style.Content>
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSiles={true}
          pagination={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1340: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          style={{
            padding: "5px 0",
          }}
        >
          <SwiperSlide
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Sui.Card.Feedback />
          </SwiperSlide>
          <SwiperSlide
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Sui.Card.Feedback />
          </SwiperSlide>
          <SwiperSlide
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Sui.Card.Feedback />
          </SwiperSlide>
          <SwiperSlide
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Sui.Card.Feedback />
          </SwiperSlide>
        </Swiper>
      </Style.Content>
      <Sui.Text.Title.Head style={{ color: "#FFD600" }}>
        ĐỂ LẠI THÔNG TIN ĐỂ NHẬN TƯ VẪN
      </Sui.Text.Title.Head>
      <Style.AdviseWrapper>
        <Sui.Input.Advise placeholder={"Tên phụ huynh"} />
        <Sui.Input.Advise placeholder={"Số điện thoại"} />
      </Style.AdviseWrapper>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background: linear-gradient(
      0.97deg,
      #058eec 0.95%,
      rgba(252, 232, 129, 0.08) 99.29%
    );
  `,

  Title: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `,

  Content: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
  `,
  AdviseWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
    column-gap: 50px;
    row-gap: 10px;
    @media ${(props) => props.theme.breakpoints.md} {
      flex-direction: column;
    }
  `,
};
