import { showNav, hideNav } from "../Styled";

import NavBarLinks from "./NavBarLinks";

function NavBarList(props) {
  return (
    <div className={props.show ? showNav : hideNav} id="mobile-menu-2">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
        <NavBarLinks pageLink="/" pageName="Home" />
        <NavBarLinks pageLink="/about" pageName="About Me" />
        <NavBarLinks pageLink="/experience" pageName="Experience" />
        <NavBarLinks pageLink="/skills" pageName="Skills" />
        <NavBarLinks pageLink="/contact" pageName="Contact Me" />
      </ul>
    </div>
  );
}

export default NavBarList;
