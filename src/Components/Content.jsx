const contactDetails = [
  {
    title: "Phone",
    text: "+1 (555) 123-4567",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "contact@airevolution.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];
export const Content = () => {
  return (
    <>
      <div id="contact" className="m-20 flex gap-4 flex-wrap ">
        <div className="flex-1">
          <div>
            <span className="gradient-text my-4">Get in touch</span>
          </div>
          <h1 className="text-4xl font-bold my-4">
            Ready To <span className="gradient-text">Transform</span> your
            bussiness With Ai
          </h1>
          <p className="text-gray-500 my-4">
            Our team of AI experts is ready to help you implement cutting-edge
            solutions tailored to your specific needs. Contact us today to
            schedule a consultation.
          </p>
          {contactDetails.map((item, i) => (
            <div className="flex items-center gap-4 py-4" key={i}>
              <div className="text-purple-500 bg-purple-100 p-2 rounded-xl">
                {" "}
                {item.icon}
              </div>
              <div>
                <span className="flex font-bold"> {item.title}</span>
                <p> {item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 w-full  bg-white shadow-lg rounded-lg p-6 ">
          <form action="">
            <div className="p-4 flex flex-col">
              <label htmlFor="">Full Name</label>
              <input
                className="border p-2 sm:w-44 md:w-full border-gray-300 rounded-lg outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="p-4 flex flex-col ">
              <label htmlFor="">Email</label>
              <input
                className="border p-2 border-gray-300 rounded-lg outline-none sm:w-44 md:w-full"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="p-4 flex flex-col">
              <label htmlFor="">Subject</label>
              <input
                className="border p-2 border-gray-300 rounded-lg outline-none sm:w-44 md:w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="p-4 flex flex-col">
              <label htmlFor="">Message</label>
              <textarea
                rows={4}
                className="border border-gray-300 rounded-lg outline-none p-1"
                name=""
                id=""
              ></textarea>
            </div>
            <button className="bg-blue-600 w-full text-white rounded-lg p-2 transition duration-300 hover:bg-blue-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
