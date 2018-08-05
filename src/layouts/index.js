import React from "react";
import PropTypes from "prop-types";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Helmet from "react-helmet";
import Header from "../components/header";

import "./index.css";

const Layout = ({ children, data }) => (
  <I18nextProvider i18n={i18n}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </div>
  </I18nextProvider>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
