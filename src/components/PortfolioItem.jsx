/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white">
      <a href={link} target="_blank">
        <img
          src={imgUrl}
          alt="Project Img"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
          {title}
        </h3>
        <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
