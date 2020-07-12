import React from "react";
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
  const languages = [
    { id: 1, name: "English (US)" },
    { id: 2, name: "Spanish" },
    { id: 3, name: "French" },
    { id: 4, name: "Italian" },
  ];

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

  function langChange(id) {
    const langID = id?.target?.value;
    const langName = languages.filter((l) => l.id === Number(langID))[0]?.name;
    alert(`Language clicked: ${langName}`);
  }

  return (
    <div className={"container"}>
      <Header onChange={langChange} langs={languages} />
      <Wizard
        heading={"Payment with"}
        headingBold={"Masterpay"}
        stepItems={stepItems}
        stepSuccess={
          <Finalize
            restartFlow={() => window.__reset_form()}
            finishFlow={() => alert("Close button triggered.")}
          />
        }
      />
      <Footer
        text={"Your payment with Masterpay"}
        textUnderline={"is safe."}
        hideLogo={false}
      />
    </div>
  );
}

export default Main;
