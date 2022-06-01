import { NavLink } from "react-router-dom";
import { C } from "../Constants";

import brandLogo from "../img/brand_logo.png";

function NavLogo() {
  return (
    <NavLink to="/" className="flex items-center">
      <img src={brandLogo} className="mr-3 h-6 sm:h-9" alt="brand Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        {C.brand}
      </span>
    </NavLink>
  );
}

export default NavLogo;
