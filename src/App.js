import React from "react";

// Importing the body parts of the wizard.
import Header from "./components/Header";
import Wizard from "./containers/Main.js";
import Footer from "./components/Footer";

// Importing the step item configs.
import {
  STEP_METHODS,
  STEP_BANKS,
  STEP_BANK_AUTH,
  STEP_AMOUNT,
  STEP_VERIFY,
  STEP_ACCOUNT,
  STEP_TRANSFER,
  LANGUAGES,
  HEADING_TITLE,
  HEADING_TITLE_BOLD,
  FOOTER_TITLE,
  FOOTER_TITLE_UNDERLINE,
} from "./constants";

// Importing the step item templates.
import Methods from "./components/Example-Steps/Methods";
import Banks from "./components/Example-Steps/Banks";
import BankAuth from "./components/Example-Steps/BankAuth";
import Amount from "./components/Example-Steps/Amount";
import Verify from "./components/Example-Steps/Verify";
import Transfer from "./components/Example-Steps/Transfer";
import Account from "./components/Example-Steps/Account";
import Finalize from "./components/Example-Steps/Finalize";

function Main() {
    // Changing the language from dropdown will trigger "langChange" function.
  function langChange(id) {
    try {
      const langID = id?.target?.value;
      const langName = LANGUAGES.filter((l) => l.id === Number(langID))[0]?.name;
      alert(`Language clicked: ${langName}`);
    } catch (ex) {
      console.error(ex);
    }
  }

  /*
    This is an example of steps with ready-to-use templates.
    stepItems is <Array> and requires <Objects> as a indexes. The <Object> requires "config" and "component" keys.
    config<Object> - It provides name<String>, title<String>, desc<String>, editable<Boolean>.
    component<JSX> - A generic React component for rendering.
  */
  const stepItems = [
    {
      config: STEP_METHODS,
      component: <Methods />,
    },
    {
      config: STEP_BANKS,
      component: <Banks />,
    },
    {
      config: STEP_BANK_AUTH,
      component: <BankAuth />,
    },
    {
      config: STEP_AMOUNT,
      component: <Amount />,
    },
    {
      config: STEP_VERIFY,
      component: <Verify />,
    },
    {
      config: STEP_ACCOUNT,
      component: <Account />,
    },
    {
      config: STEP_TRANSFER,
      component: <Transfer />,
    },
  ];

  return (
    <div className={"container"}>
      {/*
        Header receives only "langs" Array<Object> and "onChange" <Function> props.
        The logo should be updated from CSS (background-image).
      */}
      <Header langs={LANGUAGES} onChange={langChange} />

      {/*
        Wizard receives only "heading" <String>, "headingBold" <String> [Optional], "stepItems" Array<Object>, and "stepSuccess" <JSX> props.
      */}
      <Wizard
        heading={HEADING_TITLE}
        headingBold={HEADING_TITLE_BOLD}
        stepItems={stepItems}
        stepSuccess={
          <Finalize
            restartFlow={() => window.__reset_form()}
            finishFlow={() => alert("Close button triggered.")}
          />
        }
      />

      {/*
        Footer receives only "text" <String>, "textUnderline" <String> [Optional], and "hideLogo" <Boolean> [Optional] props.
      */}
      <Footer
        text={FOOTER_TITLE}
        textUnderline={FOOTER_TITLE_UNDERLINE}
        hideLogo={false}
      />
    </div>
  );
}

export default Main;
