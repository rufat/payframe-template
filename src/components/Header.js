import React from "react";

function Header({ onChange, langs }) {
  return (
    <div className={"header"}>
      <div className={"items"}>
        <div className={"logo"} />
        <select className={"lang"} onChange={onChange}>
          {langs.map((l, i) => (
            <option key={i} value={l.id}>
              {l.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
