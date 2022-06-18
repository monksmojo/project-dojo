import githubICON from "../../svg/github.svg";
import twitterICON from "../../svg/twitter.svg";
import linkedInICON from "../../svg/linkedin.svg";
import hackerRank from "../../svg/hackerrank.svg";

import EasterEgg from "../easter/EasterEgg";
import EasterModal from "../easter/EasterModal";
import FooterLink from "./FooterLink";
import FooterLogo from "./FooterLogo";
import FooterMsg from "./FooterMsg";
import BackToHome from "./BackToHome";
import { C } from "../../Constants";

import { useState, useEffect, useCallback } from "react";

function Footer(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState([]);

  const activateEasterEgg = () => {
    setShowModal(true);
    setCurrentPhrase([]);
  };

  useEffect(() => {
    console.log(currentPhrase.join(""));
    if (currentPhrase.join("") === C.key) {
      activateEasterEgg();
    }
  }, [currentPhrase]);

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-indigo-800  text-white">
      <div className="max-w-5xl px-4 py-16 mx-auto  sm:px-6 lg:px-8">
        <BackToHome />
        <FooterLogo />
        <FooterMsg />
        <EasterModal showModal={showModal} setShowModal={setShowModal} />
        <EasterEgg
          currentPhrase={currentPhrase}
          setCurrentPhrase={setCurrentPhrase}
        />
        <ul className="flex justify-center gap-6 mt-12 md:gap-8">
          <FooterLink
            icon={twitterICON}
            linkName={C.twitter}
            linkTo={C.twitter}
          />
          <FooterLink
            icon={linkedInICON}
            linkName={C.linkedIn}
            linkTo={C.linkedIn}
          />
          <FooterLink icon={githubICON} linkName={C.github} linkTo={C.github} />
          <FooterLink
            icon={hackerRank}
            linkName={C.hackerRank}
            linkTo={C.hackerRank}
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
