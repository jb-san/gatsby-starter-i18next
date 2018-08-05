import React from "react";
import Link from "gatsby-link";
import i18n from "../i18n";
import { translate } from "react-i18next";

const IndexPage = ({ t }) => (
  <div>
    <h1 className={"text-green"}>{t("test")}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default translate()(IndexPage);
