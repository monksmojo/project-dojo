import { NavLink } from "react-router-dom";
function NavBarLinks(props) {
  return (
    <NavLink
      to={props.href}
      className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-purple-600 hover:border-current"
    >
      {props.linkName}
    </NavLink>
  );
}

export default NavBarLinks;
