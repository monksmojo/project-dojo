import githubICON from "../../svg/github.svg";
import twitterICON from "../../svg/twitter.svg";
import linkedInICON from "../../svg/linkedin.svg";
import hackerRank from "../../svg/hackerrank.svg";

import EasterEgg from "./EasterEgg";
import FooterLink from "./FooterLink";
import FooterLogo from "./FooterLogo";
import FooterMsg from "./FooterMsg";
import BackToHome from "./BackToHome";

function Footer(props) {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-indigo-800  text-white">
      <div className="max-w-5xl px-4 py-16 mx-auto  sm:px-6 lg:px-8">
        <BackToHome />
        <FooterLogo />
        <FooterMsg />
        <EasterEgg />
        <ul className="flex justify-center gap-6 mt-12 md:gap-8">
          <FooterLink icon={twitterICON} linkName={"Twitter"} linkTo={""} />
          <FooterLink icon={linkedInICON} linkName={"LinkedIn"} linkTo={""} />
          <FooterLink icon={githubICON} linkName={"GitHub"} linkTo={""} />
          <FooterLink icon={hackerRank} linkName={"HackerRank"} linkTo={""} />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
