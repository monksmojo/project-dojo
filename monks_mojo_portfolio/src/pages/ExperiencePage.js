import TimeLine from "../components/experience/TimeLine";
function ExperiencePage() {
  return (
    <section className="p-6 bg-gradient-to-b from-indigo-800 to-gray-800  text-white">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-yellow-400">
              <h3 className="text-3xl font-semibold">EXPERIENCES</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-white">
                Dojo's I have worked in
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-200">
              <TimeLine
                companyName="To The New"
                period="Software Engineer DEC 2020 - PRESENT"
                description="Utilizing python and spark to solve the big data problem by processing the hourly consumption of aws services and generating monthly invoices and dashboards based on their usage. Also using react.js to create summarized monthly and quarterly dashboards to show consumption of the aws services based on region operation and cost"
              />
              <TimeLine
                companyName="To The New"
                period="Software Consultant AUG 2020 - NOV 2020"
                description="Utilizing core Java language, SpringBoot framework and sql redshift database to create rest api consumed by the cms configurational dashboard and used junit-5 and mockito to create unit test suite for the apis."
              />
              <TimeLine
                companyName="To The New"
                period="Java Trainee FEB 2020 - JUL 2020"
                description="Utilizing core Java language, SpringBoot framework and sql redshift database to create rest api consumed by the cms configurational dashboard and used junit-5 and mockito to create unit test suite for the apis."
              />
              <TimeLine
                companyName="Web Tycoons"
                period="FrontEnd Web Intern JUNE 2018 - AUG 2018"
                description="used html5 and css3 to create single page websites landing page"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperiencePage;
