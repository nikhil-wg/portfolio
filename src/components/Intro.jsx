export default function Intro() {
  return (
    <>
      <div className="flex items-center justify-center text-center flex-col pt-20 px-3">
        <h1 className="text-4xl md:text-7xl mb-4 font-bold">Developer</h1>
        <p className="text-base md:text-xl mb-4 font-medium">
          AI and Web Developer
        </p>
        <p className="text-sm max-w-xl mb-6 font-medium">
          I am <a className="font-bold"> NIKHIL WAGH </a> passionate{" "}
          <b> full-stack web developer</b> specializing in the MERN stack. With
          a background in Artificial Intelligence and Data Science, I thrive on
          building innovative, user-friendly web solutions. <br></br>
          My goal is to bridge creativity and technology to solve real-world
          problems. Eager to learn and grow, I continuously explore new tools
          and frameworks. Let&apos;s create impactful digital experiences
          together.
        </p>
        <button className="cursor-pointer mb-6 flex justify-between bg-stone-900 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] ">
          Download Resume
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            ></path>
          </svg> */}
        </button>
      </div>
    </>
  );
}
