import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export default ({ element }: any) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
