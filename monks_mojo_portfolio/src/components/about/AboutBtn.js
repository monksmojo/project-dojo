import { NavLink } from "react-router-dom";

function AboutBtn(props) {
  return (
    <>
      <NavLink
        to={props.pageLink}
        className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:bg-violet-400 hover:text-gray-900 hover:border-violet-400"
      >
        {props.btnText}
      </NavLink>
    </>
  );
}

export default AboutBtn;
