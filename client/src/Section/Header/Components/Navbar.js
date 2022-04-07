import React from "react";
import styled from "styled-components";
import * as Co from "../../../components";
import { Link } from "react-scroll";
import * as data from "./data";

export const Navbar = () => {
  return (
    <Style.Wrapper>
      {data.nav.map((item, i) => {
        return (
          <Style.LinkS
            key={i}
            to={item.id}
            activeClass="active"
            duration={500}
            spy={true}
            smooth={true}
            offset={-120}
          >
            {item.name}
          </Style.LinkS>
        );
      })}
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

  LinkS: styled(Link)`
    color: var(--color-title);
    font-size: 1.6rem;
    font-weight: 600;
    :hover {
      transform: scale(1.1);
    }

    &.active {
      color: var(--color-hover);
    }

    :hover {
      color: var(--color-hover);
    }
  `,
};
