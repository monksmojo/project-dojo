import rIcon from "../svg/rIcon.svg";
import pythonIcon from "../svg/pythonIcon.svg";
import javaIcon from "../svg/javaIcon.svg";
import starpiIcon from "../svg/sIcon.svg";
import scalaIcon from "../svg/scalaIcon.svg";
import springIcon from "../svg/springIcon.svg";
import sqlIcon from "../svg/sqlIcon.svg";
import gitIcon from "../svg/gitIcon.svg";

import SkillBadge from "../components/skill/SkillBadge";

function SkillPage() {
  return (
    <section className="p-6 bg-gradient-to-b  from-gray-800 to-indigo-800  text-gray-100">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Skills
          <span className="text-yellow-300"> Harnessed </span>
          Over The Years
        </h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto text-white">
        <SkillBadge badge={pythonIcon} badgeTxt="Python" />
        <SkillBadge badge={rIcon} badgeTxt="React" />
        <SkillBadge badge={javaIcon} badgeTxt="Java" />
        <SkillBadge badge={starpiIcon} badgeTxt="Strapi" />
        <SkillBadge badge={scalaIcon} badgeTxt="Spark" />
        <SkillBadge badge={springIcon} badgeTxt="Spring Boot" />
        <SkillBadge badge={gitIcon} badgeTxt="git" />
        <SkillBadge badge={sqlIcon} badgeTxt="sql" />
      </div>
    </section>
  );
}

export default SkillPage;
