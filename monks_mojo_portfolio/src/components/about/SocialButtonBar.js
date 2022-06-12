import SocialLink from "./SocialLink";
import GitHubSvg from "../../svg/github.svg";
import LinkedInSvg from "../../svg/linkedin.svg";
import TwitterSvg from "../../svg/twitter.svg";

function SocialButtonBar() {
  return (
    <div className="relative inline-block px-14  py-4 text-white bg-violet-500 rounded-full group">
      <span className="text-md font-semibold transition-opacity group-hover:opacity-0">
        Follow On Social
      </span>
      <ul className="absolute inset-0 flex items-center justify-center space-x-3 transition-opacity opacity-0 group-hover:opacity-100">
        <SocialLink
          socialName={"Github"}
          socialIcon={GitHubSvg}
          socialLink={""}
        />
        <SocialLink
          socialName={"LinkedIn"}
          socialIcon={LinkedInSvg}
          socialLink={""}
        />
        <SocialLink
          socialName={"Twitter"}
          socialIcon={TwitterSvg}
          socialLink={""}
        />
      </ul>
    </div>
  );
}

export default SocialButtonBar;
