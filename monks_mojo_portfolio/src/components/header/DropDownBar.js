import NavIcons from "../../ui/NavIcons";
import { showDropDown, hideDropDown } from "../../Styled";
import { C } from "../../Constants";
import GitHubSvg from "../../svg/github.svg";
import LinkedInSvg from "../../svg/linkedin.svg";
import TwitterSvg from "../../svg/twitter.svg";
import HackerRankSvg from "../../svg/hackerrank.svg";

function DropDownBar(props) {
  return (
    //   drop down menu under profile pic
    <div className={props.show ? showDropDown : hideDropDown} id="dropdown">
      <div className="py-3 px-4">
        <span className="block text-sm  text-white">{C.name}</span>
        <span className="block text-sm font-medium truncate text-gray-400">
          {C.email}
        </span>
      </div>
      <ul className="py-1" aria-labelledby="dropdown">
        <NavIcons externalLink="https://github.com/monksmojo" linkName="Github">
          <img className="display: inline" src={GitHubSvg} alt="github-icon" />
        </NavIcons>
        <NavIcons
          externalLink="https://www.linkedin.com/in/monksmojo/"
          linkName="LinkedIn"
        >
          <img
            className="display: inline"
            src={LinkedInSvg}
            alt="linkedin-icon"
          />
        </NavIcons>
        <NavIcons
          externalLink="https://twitter.com/monks_mojo"
          linkName="Twitter"
        >
          <img
            className="display: inline"
            src={TwitterSvg}
            alt="twitter-icon"
          />
        </NavIcons>
        <NavIcons
          externalLink="https://www.hackerrank.com/monks_mojo"
          linkName="Hacker Rank"
        >
          <img
            className="display: inline"
            src={HackerRankSvg}
            alt="hackerRank-icon"
          />
        </NavIcons>
      </ul>
    </div>
  );
}

export default DropDownBar;
