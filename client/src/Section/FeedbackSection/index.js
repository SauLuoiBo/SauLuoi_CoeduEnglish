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
          slidesPerView={3}
          centeredSiles={true}
          pagination={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Style.Content>
      
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
};
