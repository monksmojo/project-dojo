import { useState } from "react";

import NavLogo from "../../ui/NavLogo";
import DropDownBar from "./DropDownBar";
import HamburgerIcon from "../../ui/HamburgerIcon";
import NavBarList from "../../ui/NavBarList";
import ProfileIcon from "../../ui/ProfileIcon";

function Navbar() {
  const [showDropDown, toggleDropDown] = useState(false);
  const [showNavBar, toggleNavBar] = useState(false);
  return (
    <nav className=" border-gray-200 px-2 sm:px-1 py-2.5 bg-gray-800">
      <div className="flex flex-wrap justify-between items-center md:h-20  max-w-screen-2xl mx-auto">
        <NavLogo />
        <div className="flex items-center md:order-2">
          <ProfileIcon
            show={showDropDown}
            toggleShow={(e) => toggleDropDown(!showDropDown)}
          />
          <DropDownBar show={showDropDown} />
          <HamburgerIcon
            show={showNavBar}
            toggleShow={(e) => toggleNavBar(!showNavBar)}
          />
        </div>
        <NavBarList show={showNavBar} />
      </div>
    </nav>
  );
}
export default Navbar;
