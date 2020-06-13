import React from "react";
import { ThemeProvider } from "styled-components";
import { styleVariables } from '../variables';

const Theme = ({ children }) => (
    <ThemeProvider theme={styleVariables}>{children}</ThemeProvider>
);

export default Theme;