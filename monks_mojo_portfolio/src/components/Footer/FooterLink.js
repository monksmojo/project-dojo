import { NavLink } from "react-router-dom";

function FooterLink(props) {
  return (
    <li>
      <NavLink to={props.linkTo} className="text-white transition hover:text-yellow-400">
        <span className="sr-only">{props.linkName}</span>
        <img src={props.icon} alt={props.linkName} />
      </NavLink>
    </li>
  );
}

export default FooterLink;
