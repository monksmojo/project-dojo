import { NavLink } from "react-router-dom";
import home from "../../svg/home.svg";

function BackToHome(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <NavLink
      className="max-w-xs flex items-center justify-center mx-auto px-2 py-3 shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900 border-violet-400 rounded-full"
      to="/"
      onClick={scrollTop}
    >
      <span className="font-medium transition-colors text-black">
        Back To Home
      </span>

      <span className="flex-shrink-0 p-2 ml-4 focus:ring-violet-400 bg-gray-800 border border-violet-400 rounded-full group-active:border-violet-400">
        <img className="inline" src={home} alt="homeIcon" />
      </span>
    </NavLink>
  );
}

export default BackToHome;
