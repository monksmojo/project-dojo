import AboutBtn from "../components/about/AboutBtn";
import AboutCard from "../components/about/AboutCard";

// overflow-hidden text-white lg:grid bg-gradient-to-b  from-purple-800 to-indigo-800 lg:grid-cols-2 lg:items-center
function AboutPage() {
  return (
    <section className="bg-gradient-to-b  from-gray-800 to-indigo-800 text-gray-100">
      <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            👋 It's Me
            <br />
            <span className="text-violet-400">Monks </span>Mojo
          </h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12">
            👨‍💻 Software Engineer 🧰Application Developer <br /> 🍬Jolly Bean 🦸‍♂️
            Code Ranger
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <AboutBtn pageLink="/contact" btnText="Contact me" />
            <AboutBtn pageLink="/resume" btnText="My Resume" />
          </div>
        </div>
        <AboutCard />
      </div>
    </section>
  );
}

export default AboutPage;
