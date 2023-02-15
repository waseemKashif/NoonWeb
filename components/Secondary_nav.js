import React from "react";
import DropdownComponent from "./Dropdown";
import Middle_nav from "./Middle_nav";

const Secondary_nav = () => {
  return (
    <div className="flex justify-evenly bg-white">
      {/* <DropdownComponent className="sm:order-2 absolute" /> */}
      <Middle_nav className="sm:order-1 place-content-start" />
      {/* <DropdownComponent /> */}
    </div>
  );
};

export default Secondary_nav;
