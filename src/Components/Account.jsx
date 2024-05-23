import React, { useState } from "react";
import SideBar from "../Components/Sidebar";
import AccountSetting from "../Components/AccountSetting";
import Help from "../Components/Help";

export const Account = () => {
  const [active, setActive] = useState("");
  return (
    <div className="mt-[70px] flex gap-[20px]">
      <SideBar active={active} setActive={setActive} />
      <div>{active === "account" ? <AccountSetting /> : <></>}</div>
      <div>{active === "help" ? <Help /> : <></>}</div>
    </div>
  );
};
