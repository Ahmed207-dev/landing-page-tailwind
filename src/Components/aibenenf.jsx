const benefits = [
  {
    title: "Healthcare Advancements",
    description:
      "AI enables faster diagnosis, personalized treatment plans, and drug discovery, saving countless lives.",
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
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    color: "primary",
  },
  {
    title: "Economic Growth",
    description:
      "AI-driven automation and insights contribute to increased productivity and economic expansion.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "secondary",
  },
  {
    title: "Enhanced Security",
    description:
      "AI-powered systems detect and prevent cyber threats and fraud more effectively than traditional methods.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    color: "accent",
  },
  {
    title: "Energy Efficiency",
    description:
      "AI optimizes energy consumption in industries and homes, reducing waste and environmental impact.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "primary",
  },
  {
    title: "Climate Solutions",
    description:
      "AI models help predict climate patterns and develop strategies to combat climate change.",
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
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    color: "secondary",
  },
  {
    title: "Education Access",
    description:
      "AI-powered platforms provide personalized learning experiences to students worldwide.",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    color: "accent",
  },
];

export const Aibenenf = () => {
  return (
    <>
      <div
        id="benefits"
        className="mx-8 my-6 bg-gray-900 rounded-xl text-white p-6"
      >
        <div className="text-center">
          <span className="gradient-text font-bold mb-2">AI Benefits</span>
          <h1 className="text-4xl mb-2">
            How Is Ai
            <span className="gradient-text mx-2 ">Transforming Our World</span>
          </h1>
          <p className="text-gray-300">
            Discover the positive impact of AI across various sectors and
            industries.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {benefits.map((item, i) => (
            <div key={i} className="bg-white/5 w-fit m-5 p-4 rounded-xl">
              <div className="bg-white/4 w-fit h-fit flex justify-center items-center p-2 my-3 rounded-lg">
                <span className=" text-blue-500">{item.icon}</span>
              </div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="mt-2 w-100 text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
