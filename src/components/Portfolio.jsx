import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row  justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">

      {portfolio.map((project) => (
        // eslint-disable-next-line react/jsx-key
        <PortfolioItem
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
        link={project.link}
        />
      ))}
      </div>
    </div>
  );
}
