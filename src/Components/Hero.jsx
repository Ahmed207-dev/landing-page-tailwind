const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

export const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="app-container pt-24 items-center overflow-hidden  "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <a className="gradient-text text-4xl flex mb-2 font-bold">
              Ai Intelligence
            </a>
            <a className=" text-4xl font-bold mb-2">For A Smarter future </a>
            <p className="w-90 mb-4">
              Empowering businesses and creators with next-generation 
              artificial intelligence tools designed to automate 
              workflows and boost productivity.
            </p>
            <button className="bg-indigo-500 text-white p-2 rounded-lg transition hover:bg-indigo-400">
              Explore AI Solutions
            </button>
            <button className="border border-gray-300 p-2 rounded-lg ml-5">
              Learn More
            </button>
            <div className="flex items-center mt-4 ">
              {images.map((img, i) => {
                return (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full"
                    src={img}
                    alt={`User ${i + 1}`}
                  />
                );
              })}
              <p className="ml-5">
                Trusted by <span className="gradient-text m-1">10000+</span>
                User
              </p>
            </div>
          </div>
          <div>
            <img
              className="md:h-100 h-80 object-bottom rounded-xl"
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
