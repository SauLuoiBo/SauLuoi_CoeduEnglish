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
    cursor: pointer;
    :hover {
      color: var(--color-primary);
    }
  `,
};
