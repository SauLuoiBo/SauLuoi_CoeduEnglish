import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";
export const TeacherSection = () => {
  return (
    <Sui.View.ViewSection title={"Giao vien Kinh nghiem"} id="teacher">
      <Style.Wrapper>
        <Style.Card>
          <Sui.Card.Main
            w={"50rem"}
            title={"Giáo viên"}
            text={
              <Style.TextWrapper>
                <Sui.Text.Normal.Medium>
                  Đội ngũ giáo viên người Philippines được tuyển chọn kỹ càng
                  Tối thiểu 2 năm kinh nghiệm giảng dạy
                </Sui.Text.Normal.Medium>
                <Sui.Text.Normal.Medium>
                  Tối thiểu 2 năm kinh nghiệm giảng dạy
                </Sui.Text.Normal.Medium>
              </Style.TextWrapper>
            }
          />
        </Style.Card>
        <Style.Card flex={"flex-end"}>
          <Sui.Card.Main
            w={"40rem"}
            title={"Trình độ"}
            text={
              <Style.TextWrapper>
                <Sui.Text.Normal.Medium>
                  Trình độ chuyên môn cao. Có chứng chỉ dạy tiếng Anh cho người
                  nước ngoài như TEFL hoặc TESOL.
                </Sui.Text.Normal.Medium>
                <Sui.Text.Normal.Medium>
                  Giúp trẻ có một môi trường học ngoại ngữ với người bản địa
                  ngay tại nhà
                </Sui.Text.Normal.Medium>
              </Style.TextWrapper>
            }
          />
        </Style.Card>
        <Style.Teacher>
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
              <Sui.Card.Teacher />
            </SwiperSlide>
            <SwiperSlide
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Sui.Card.Teacher />
            </SwiperSlide>
            <SwiperSlide
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Sui.Card.Teacher />
            </SwiperSlide>
            <SwiperSlide
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Sui.Card.Teacher />
            </SwiperSlide>
          </Swiper>
          {/* <Sui.Card.Teacher />
          <Sui.Card.Teacher />
          <Sui.Card.Teacher />
          <Sui.Card.Teacher /> */}
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
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};
