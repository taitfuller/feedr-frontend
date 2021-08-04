import React from "react";
import Menu from "./index";

export default (
  <Menu title="Logging in as taitfuller" width={210}>
    <Menu.Item handleOnClick={() => console.log("Click Settings!")}>
      Settings
    </Menu.Item>
    <Menu.Item handleOnClick={() => console.log("Click Log Out!")}>
      Log Out
    </Menu.Item>
  </Menu>
);
