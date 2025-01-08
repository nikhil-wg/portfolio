import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export default function PortfolioItem({ title, imgUrl, stack, link, githubLink }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-3 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4 h-36 md:h-48"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            borderRadius: '12px',
          }}
        />
        <div className="w-full p-4">
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map((item, index) => (
              <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white">
                {item}
              </span>
            ))}
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Demo
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 items-center"
            >
              <FaGithub className="mr-1 size-5"/> Github
            </a>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
