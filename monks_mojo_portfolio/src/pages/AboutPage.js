import bannerImage from "../img/banner_dp.png";

function AboutPage() {
  return (
    <aside class="overflow-hidden text-white lg:grid bg-gradient-to-b  from-purple-800 to-indigo-800 lg:grid-cols-2 lg:items-center">
      <div class="lg:pt-24">
        <div class="relative w-full h-64 sm:h-96 lg:h-[500px]">
          <img
            class="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
      <div class="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
        <div class="max-w-lg mx-auto lg:ml-0 lg:pt-12">
          <p class="text-3xl font-bold sm:text-4xl">
            Lorem ipsum, dolor sit amet consectetur.
          </p>

          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus iusto odit, magni repellat aliquam!
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AboutPage;
