import NavBarLinks from "./NavBarLinks";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";

import GitHubSvg from "../../svg/github.svg";
import LinkedInSvg from "../../svg/linkedin.svg";
import TwitterSvg from "../../svg/twitter.svg";
function Navbar() {
  return (
    <header className="border-b-4 bg-[#fff] border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between h-20 mx-auto max-w-screen-3xl sm:px-6 lg:px-8">
        <NavLogo />
        <div className="flex items-center justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-700 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            <NavBarLinks href="/about" linkName="About" />
            <NavBarLinks href="/skills" linkName="Skills" />
            <NavBarLinks href="/badges" linkName="Badges" />
            <NavBarLinks href="/contact-me" linkName="Contact Me" />
          </nav>

          <div className="flex items-center ml-8 ">
            <div className="flex items-center border-gray-200 divide-x divide-gray-100 border-x">
              <NavIcons externalLink="" iconName="GitHub">
                <img src={GitHubSvg} alt="githubIcon" />
              </NavIcons>
              <NavIcons externalLink="" iconName="LinkedIn">
                <img src={LinkedInSvg} alt="githubIcon" />
              </NavIcons>
              <NavIcons externalLink="" iconName="Twitter">
                <img src={TwitterSvg} alt="githubIcon" />
              </NavIcons>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
