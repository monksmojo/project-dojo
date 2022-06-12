import brandLogo from "../../img/brand_logo.png";

function ContactBanner(props) {
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-white">
          Let's <span className="text-yellow-400">talk!</span>
        </h2>
        <div className="text-white">
          You Can Slide Into My Mail I Don't Mind
        </div>
      </div>
      <div className="md:shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48 p-4"
          src={brandLogo}
          alt="Man looking at item at a store"
        />
      </div>
    </div>
  );
}

export default ContactBanner;
