import { od, cd } from "../Styled";
import pi from "../img/profile.png";
function ProfileIcon(props) {
  return (
    <button
      type="button"
      className={props.show ? od : cd}
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="dropdown"
      onClick={props.toggleShow}
    >
      <span className="sr-only">Open user menu</span>
      <img className="w-8 h-8 rounded-full" src={pi} alt="profile-pic" />
    </button>
  );
}

export default ProfileIcon;
