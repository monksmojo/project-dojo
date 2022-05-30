import { NavLink } from "react-router-dom";
function NavIcons(props) {
  return (
    <span>
      <NavLink
        to="{props.externalLink}"
        className="block p-6 border-b-4 border-transparent hover:border-purple-600"
      >
        {props.children}
        <span className="sr-only">{props.iconName}</span>
      </NavLink>
    </span>
  );
}

export default NavIcons;
