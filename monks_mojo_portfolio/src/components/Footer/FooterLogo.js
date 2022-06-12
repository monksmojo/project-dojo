import { NavLink } from "react-router-dom";
import logo from "../../img/brand_logo.png";

function FooterLogo(props) {
  return (
    <div className="flex justify-center">
      <div className="mb-6 md:mb-0 mt-6">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-8 inline" alt="FlowBite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            @monksmojo
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default FooterLogo;
