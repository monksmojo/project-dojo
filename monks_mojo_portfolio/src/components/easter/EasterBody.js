import lotusFeet from "../../img/lotus_feet.webp";
import innerPeace from "../../img/easter_video.mp4";
import mousePointer from "../../svg/mousePointer.svg";

function EasterBody() {
  return (
    <div className="p-6 space-y-6">
      <section className="relative overflow-hidden rounded-lg shadow-2xl pb-80 lg:pb-0">
        <div className="ml-auto text-center lg:w-2/3 sm:p-12">
          <a href="https://www.instagram.com/prem.anj/">
            <h3 className="text-xl font-bold bg-violet-400 p-2 text-black">
              Inner Peace{" "}
              <img className="inline" src={mousePointer} alt="mouse pointer" />
            </h3>
          </a>
          <video width="750" height="500" controls>
            <source src={innerPeace} type="video/mp4" />
          </video>
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3">
          <img
            alt=""
            className="absolute inset-0 object-cover w-full h-full"
            src={lotusFeet}
          />
        </div>
      </section>
    </div>
  );
}

export default EasterBody;
