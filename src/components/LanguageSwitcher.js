import React, { Component } from "react";
import classNames from "classnames";
import { translate } from "react-i18next";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames("LanguageSwitcher__button", {
      "LanguageSwitcher__button--selected": this.state.language === code
    });

    return (
      <button
        key={code}
        style={{ border: this.state.language === code ? "5px solid gold" : "" }}
        className={buttonClass}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    );
  }

  render() {
    const languages = [
      { code: "en", label: "English" },
      { code: "sv", label: "Svenska" }
    ];

    return (
      <div className="LanguageSwitcher">
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    );
  }
}

export default translate("LanguageSwitcher")(LanguageSwitcher);
