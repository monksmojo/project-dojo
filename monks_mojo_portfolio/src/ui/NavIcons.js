import { NavLink } from "react-router-dom";
function NavIcons(props) {
  return (
    <li>
      <NavLink
        to={props.externalLink}
        className="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
      >
        <span className="mr-2">{props.linkName}</span>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavIcons;
