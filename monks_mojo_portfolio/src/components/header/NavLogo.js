import HamburgerIcon from "../../ui/HamburgerIcon";
import { NavLink } from "react-router-dom";

import brandLogo from "../../img/brand_logo1.png";

function NavLogo() {
  return (
    <div className="flex items-center">
      <HamburgerIcon />
      <NavLink to={""} className="flex">
        <span className="inline-block w-40 h-20 rounded-lg">
          <img src={brandLogo} alt="brand logo" />
        </span>
      </NavLink>
    </div>
  );
}

export default NavLogo;
