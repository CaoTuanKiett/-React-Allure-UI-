import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import "./Introduction.scss";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import logo from "../../assets/images/logo.png";

const Introduction = () => {
  const ListEnvironment = [
    {
      icon: "ICEdge",
      name: "Edge",
      version: "Latest 2 versions",
    },
    {
      icon: "ICChrome",
      name: "Chrome",
      version: "Latest 2 versions",
    },
    {
      icon: "ICFirefox",
      name: "Firefox",
      version: "Latest 2 versions",
    },
    {
      icon: "ICOpera",
      name: "Opera",
      version: "Latest 2 versions",
    },
    {
      icon: "ICSafari",
      name: "Safari",
      version: "≥ 15",
    },
    {
      icon: "ICElectron",
      name: "Electron",
      version: "Latest 2 versions",
    },
  ];

  return (
    <div className="introduction">
      <DefaultLayout>
        <div className="intro">
          <div className="intro-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="intro-title">
            <h1>Allure Design System</h1>
            <p>
              This Allure design system contains both style and interaction
              guideline which can be applied to the online products of AvePoint.
              It can help us to build a consistency user experience for AvePoint
              customers.
            </p>
          </div>

          <div className="intro-support">
            <h2>WCAG2.0 supported</h2>
            <p>
              Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide
              range of recommendations for making Web content more accessible.
              Following these guidelines will make content accessible to a wider
              range of people with disabilities, including blindness and low
              vision, deafness and hearing loss, learning disabilities,
              cognitive limitations, limited movement, speech disabilities,
              photosensitivity and combinations of these. Following these
              guidelines will also often make your Web content more usable to
              users in general.
            </p>
            <span>WCAG 2 Overview</span>
          </div>

          <div className="intro-env">
            <h2>Environment Support</h2>
            <div className="env-list">
              {ListEnvironment.map((item, index) => (
                <div className="env-item" key={index}>
                  <img src={`/icons/${item.icon}.png`} alt={item.icon} />
                  <h4>{item.name}</h4>
                  <p>{item.version}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="intro-install">
            <h2>Installation</h2>
            <p>
              Since Allure UI is hosted on the feed <span>avepoint-npm</span> of
              Proget, you should create a .npmrc file under the root folder of
              your UI project.
            </p>

            <SyntaxHighlighter language="javascript" style={a11yLight}>
              {`@gui:registry=https://proget.avepoint.net/npm/avepoint-npm/
registry=https://proget.avepoint.net/npm/npm.org/`}
            </SyntaxHighlighter>

            <p>Then install the Allure UI package:</p>
            <SyntaxHighlighter language="javascript" style={a11yLight}>
              {`npm install @gui/fluent-ui-allure`}
            </SyntaxHighlighter>
          </div>

          <div className="intro-usage">
            <h2>Usage</h2>
            <p>
              In the root file of your React App, import Allure UI and set the
              corresponding theme and language.
            </p>
            <SyntaxHighlighter language="javascript" style={a11yLight}>
              {`import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
import * as React from 'react';

const Content = () => {
    return (
        <ThemeProvider theme={getAllureTheme(Themes.Cabolt, Language.EN)}>
            <div />
        </ThemeProvider>
    );
};`}
            </SyntaxHighlighter>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Introduction;
