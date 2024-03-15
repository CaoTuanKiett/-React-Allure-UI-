import React from "react";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../redux/themeSlice";
import { setLanguage } from "../../../redux/languageSlice";
import Logo from "../../../assets/images/logo.png";
import { Search } from "../../common/search/Search";
import { Select } from "../../common/select/Select";

import "./Head.scss";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const optionEnglish = [
    { text: "English", key: "en" },
    { text: "VietNam", key: "vi" },
    { text: "French", key: "French" },
    { text: "Japanese", key: "Japanese" },
  ];

  const optionTheme = [
    { text: "Theme: Light", key: "Light" },
    { text: "Theme: Dark", key: "Dark" },
    { text: "Theme: Ochre", key: "Ochre" },
    { text: "Theme: Violet", key: "Violet" },
    { text: "Theme: Magenta", key: "Magenta" },
    { text: "Theme: Lavender", key: "Lavender" },
    { text: "Theme: Pewter", key: "Pewter" },
    { text: "Theme: Mint", key: "Mint" },
    { text: "Custom theme color", key: "Custom" },
  ];

  const changeTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
  };

  const changeLanguage = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={`head-wrap`}>
      <div className="head">
        <Link to="/" className="link">
          <div className="headHome">
            <img src={Logo} alt="Allure UI" />
            <h1>Allure UI</h1>
          </div>
        </Link>

        <div className="headSearch">
          <Search />
        </div>

        <div className="headSelect">
          <Select options={optionEnglish} handleOnChange={changeLanguage} />
          <Select options={optionTheme} handleOnChange={changeTheme} />
        </div>
      </div>
    </div>
  );
};

export default Head;
