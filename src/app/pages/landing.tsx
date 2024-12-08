"use client"
import RotatingText from "./components/swaping_text";

// Arrow SVG as a variable
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className="arrow"
  >
    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
  </svg>
);

export default function LandingSection() {
  return (
    <section className="w-screen md:h-screen h-[95vh] bg-black " id="landing">
      {/* Leading section */}
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Image of the phone for background */}
        <img src="images/2.jpg" alt="" className="md:h-screen landingBg" />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text display */}
        <div className="absolute inset-0 flex items-start justify-start md:w-1/2  p-10">
          <h1 className="text-white md:text-8xl text-6xl font-extralight">
            Ready For The Next Level Of
            {/* Changing text */}
            <strong>
              <RotatingText />
            </strong>
          </h1>
          {/* Order now button */}
          <div className="absolute inset-0 flex flex-col justify-end flex-shrink-0 p-11">
            <button>
              <div className="bg-indigo-600 py-4 px-6 rounded-xl flex flex-row w-44 opacity-80 orderButton justify-between">
                <h3 className="text-lg font-bold">Order Now</h3>
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
