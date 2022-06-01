import { on, cn } from "../Styled";

import MenuSvg from "../svg/menu.svg";
function HamburgerIcon(props) {
  return (
    <button
      type="button"
      className={props.show ? on : cn}
      aria-controls="mobile-menu-2"
      aria-expanded="false"
      onClick={props.toggleShow}
    >
      <span className="sr-only">Open main menu</span>
      <img src={MenuSvg} alt="HamburgerIcon" />
    </button>
  );
}

export default HamburgerIcon;
