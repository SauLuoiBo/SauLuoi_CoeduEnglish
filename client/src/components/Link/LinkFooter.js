import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Text } from "..";

export const LinkFooter = ({ to, name }) => {
  return (
    <Link href={to || "/"}>
      <Style.Text>{name || "name"}</Style.Text>
    </Link>
  );
};

const Style = {
  Text: styled(Text.Title.Head)`
    color: red;
    cursor: pointer;
    :hover {
      color: violet;
    }
  `,
};
