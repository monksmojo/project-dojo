import { NavLink } from "react-router-dom";
function SocialLink(props) {
  return (
    <li>
      <NavLink
        className="block mx-2 transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
        to={props.socialLink}
      >
        <span className="sr-only"> {props.socialName} </span>
        <img src={props.socialIcon} alt={props.socialName} />
      </NavLink>
    </li>
  );
}

export default SocialLink;
