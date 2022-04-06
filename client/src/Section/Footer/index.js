import React from "react";
import styled from "styled-components";
import * as Sui from "../../components";
import { getImage } from "../../Functions";
import * as data from "./data";

export const Footer = () => {
  return (
    <>
      <Style.Wrapper className="container">
        <Style.Inner>
          <Sui.Text.Title.Head>Liên hệ với chúng tôi</Sui.Text.Title.Head>
          <Style.SocialWrapper>
            <Sui.Icon.Social src={getImage.getPng("fb")} alt={"fb"} />
            <Sui.Icon.Social src={getImage.getPng("gmail")} alt={"gmail"} />
            <Sui.Icon.Social src={getImage.getPng("zalo")} alt={"zalo"} />
          </Style.SocialWrapper>
          <Style.FooterWrapper>
            <Style.FlexColumn>
              {data.infor.map((item, i) => {
                return (
                  <Sui.Infor.Footer name={item.name}>
                    {item.chil}
                  </Sui.Infor.Footer>
                );
              })}
            </Style.FlexColumn>
            <Style.PolicyWrapper>
              <Style.FlexColumn>
                {data.policy.map((item, i) => {
                  return (
                    <Sui.Link.LinkFooter
                      key={i}
                      name={item.name}
                      to={item.to}
                    />
                  );
                })}
              </Style.FlexColumn>
              <Sui.Icon.Logo src={getImage.getPng("LogoHome")} alt={"logo"} />
            </Style.PolicyWrapper>
          </Style.FooterWrapper>
        </Style.Inner>
      </Style.Wrapper>
      
    </>
  );
};

const Style = {
  Wrapper: styled.footer`
    display: block;
    background: #fefb00;
  `,

  Inner: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  `,

  SocialWrapper: styled.div`
    display: flex;
    justify-content: center;
    column-gap: 30px;
    margin-top: 20px;

    border-bottom: solid 2px;
    border-color: red;
    width: 100%;
  `,
  FooterWrapper: styled.div`
    display: grid;
    justify-content: space-around;
    width: 100%;
    grid-template-columns: 50% 50%;
    margin-top: 20px;
    grid-gap: 20px;
    @media ${(props) => props.theme.breakpoints.md} {
      grid-template-columns: 100%;
    }
  `,

  PolicyWrapper: styled.div`
    display: grid;
    /* justify-content: space-around; */
    width: 100%;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    @media ${(props) => props.theme.breakpoints.xs} {
      grid-template-columns: 100%;
    }
  `,

  FlexColumn: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};
