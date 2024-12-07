export default function CompanyServices() {
    return (
      <div className="bg-black text-white py-16 px-8 relative">


<div className="relative">
  <p className="text-xs tracking-wide text-white opacity-35 pr-64 text-right w-auto right-8">
    Professionals focused on helping your <br />
    brand grow and move forward.
  </p>
  <div className="absolute right-0 top-1/4 w-60 h-px bg-white opacity-35"></div>
</div>



        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full overflow-hidden w-52">
              <img
                src="images (1).jpg" // team image
                alt="Team photo"
                className="w-full h-14 object-cover"
              />
            </div>
  
            <h1 className="text-4xl md:text-5xl text-white">
              <span className="font-bold">Unique</span> <span className="font-extralight">Ideas.</span> <br />
              <span className="font-bold">For Your</span> <span className="font-extralight">Business.</span>
            </h1>
            <button className="px-6 py-3 bg-orange-400 text-black font-semibold rounded-full flex items-center gap-2">
              What We Do <span className="text-xl">&rarr;</span>
            </button>
          </div>
  
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {/* Service Card */}
            {[
              {
                title: "Branding and Identity Design",
                description: "Our creative agency helps you define and establish your unique brand identity.",
              },
              {
                title: "Website Design and Development",
                description: "We create responsive and user-friendly websites tailored to your business needs.",
              },
              {
                title: "Advertising and Marketing Campaigns",
                description: "Boost your business with our targeted and effective marketing strategies.",
              },
              {
                title: "Creative Consulting and Development",
                description: "Innovative solutions to take your creative projects to the next level.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative border-2 border-transparent hover:border-orange-400 hover:bg-white/10 p-6 rounded-lg transition-all duration-300 group"
              >
                <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                {/* Description - Display only on hover */}
                <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                {/* Arrow Icon - Display only on hover */}
                <div className="absolute bottom-4 right-4 text-orange-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }