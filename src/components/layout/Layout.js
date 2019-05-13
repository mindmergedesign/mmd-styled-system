import React from "react";
import PropTypes from "prop-types";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";

import Global from "../utilities/Global";
import theme from "../theme";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <Global />
        <Header />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
