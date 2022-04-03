import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import theme from "./theme";

import React from "react";

export const StyledTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
