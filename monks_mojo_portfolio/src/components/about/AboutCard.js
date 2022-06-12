import profile from "../../img/profile.png";
import SocialButtonBar from "./SocialButtonBar";
function AboutCard() {
  return (
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={profile}
          alt="Udit Makkar"
        />
        <h5 className="mb-1 font-bold text-2xl text-white">
          Udit <span className="text-violet-400">Makkar</span>
        </h5>
        <span className="text-lg text-gray-200">
          Software Engineer
          <span className="text-yellow-300"> @ To The New</span>
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <SocialButtonBar/>
        </div>
      </div>
    </div>
  );
}
export default AboutCard;
