import React from "react";

function Footer({ text, textUnderline, hideLogo }) {
  return (
    <div className={"footer"}>
      {!hideLogo && <div className={"f-logo"} />}
      <div className={"f-title"}>
        {text} {textUnderline && <span>{textUnderline}</span>}
      </div>
    </div>
  );
}

export default Footer;
