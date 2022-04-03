import React from "react";
import styled from "styled-components";
import * as Co from "../../../components";

export const Navbar = () => {
  return (
    <Style.Wrapper>
      <Style.Link>giao vien</Style.Link>
      <Style.Link>giao vien</Style.Link>
      <Style.Link>giao vien</Style.Link>
      <Style.Link>giao vien</Style.Link>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.nav`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: flex-end;
    @media ${(props) => props.theme.breakpoints.md} {
      display: none;
    }
  `,

  Link: styled(Co.Text.Title.Head)`
    transition: all 0.5s linear;
    cursor: pointer;
    :hover {
      color: var(--color-hover);
      transform: scale(1.05);
    }
  `,
};
