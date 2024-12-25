import Title from "./Title";
export default function Contact() {
  return (
    <div className="flex flex-row md:flex-row justify-center my-20">
      <div className="w-7/12">
        <Title>Socials</Title>
        <div className="flex flex-row justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-2  gap-12">
            {/* git*/}
            <a
              className="w-10 h-12 bg-gray-800 flex items-center justify-center rounded-tr-lg rounded-bl-lg transition-all duration-300 hover:bg-[#4338ca] active:scale-90"
              href="https://github.com/nikhil-wg" target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github w-5 fill-white"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              className="w-10 h-12 bg-gray-800 flex items-center justify-center rounded-tr-lg rounded-bl-lg transition-all duration-300 hover:bg-blue-500 active:scale-90"
              href="https://x.com/Nikhilwagh01" target="_blank"
            >
              <svg viewBox="0 0 16 16" className="w-5 fill-white">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className="w-10 h-12 bg-gray-800 flex items-center justify-center rounded-tr-lg rounded-bl-lg transition-all duration-300 hover:bg-blue-700 active:scale-90"
              href="https://www.linkedin.com/in/nikhil-wagh-2004/" target="_blank"
            >
              <svg viewBox="0 0 448 512" className="w-5 fill-white">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>

            {/* email */}
            <a
              className="w-10 h-12 bg-gray-800 flex items-center justify-center rounded-tr-lg rounded-bl-lg transition-all duration-300 hover:bg-green-500 active:scale-90"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
