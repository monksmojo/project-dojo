import { NavLink } from "react-router-dom";
function NavBarLinks(props) {
  return (
    <li>
      <NavLink
        to={props.pageLink}
        className="block py-2 pr-4 pl-3 text-white hover:bg-gray-600 hover:rounded-md"
      >
        {props.pageName}
      </NavLink>
    </li>
  );
}

export default NavBarLinks;
