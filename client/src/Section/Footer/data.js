import * as Sui from "../../components";

export const policy = [
  {
    name: "Chinhs sacsh baor matja",
    to: "/policy",
  },
  {
    name: "Chính sách thanh toán",
    to: "/pay",
  },
  {
    name: "Hỗ trợ",
    to: "/support",
  },
];

export const infor = [
  {
    name: "Website",
    chil: (
      <a href="http://english.coedu.vn">
        <Sui.Text.Normal.Medium>english.coedu.vn</Sui.Text.Normal.Medium>
      </a>
    ),
  },
  {
    name: "Hotline",
    chil: (
      <a href="tel:+84399 126 218">
        <Sui.Text.Normal.Medium>0399 126 218</Sui.Text.Normal.Medium>
      </a>
    ),
  },
  {
    name: "Email",
    chil: (
      <a href="mailto:coeduenglish@gmail.com">
        <Sui.Text.Normal.Medium>coeduenglish@gmail.com</Sui.Text.Normal.Medium>
      </a>
    ),
  },
  {
    name: "Trụ sở",
    chil: (
      <Sui.Text.Normal.Medium>
        Ngõ 68 dương đình nghệ, yên hòa, cầu giấy, hà nội.
      </Sui.Text.Normal.Medium>
    ),
  },
];
