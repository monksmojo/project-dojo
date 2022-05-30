import MenuSvg from "../svg/menu.svg";
function HamburgerIcon() {
  return (
    <button type="button" className="p-2 sm:mr-4 lg:hidden">
      <img src={MenuSvg} alt="hamburger icon" />
    </button>
  );
}

export default HamburgerIcon;
