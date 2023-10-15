import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const PortfolioCard = ({ src, codeLink, demoLink, title, content }) => {
    return (
      <div className=" shadow-2xl dark:shadow-slate-700 dark:shadow-lg rounded-xl flex flex-col justify-between gap-2 hover:scale-105 duration-500">
        <div className="relative">
          <a href={demoLink} target="_blank">
            <img
              className="h-auto md:max-h-64 w-full rounded-t-xl object-cover cursor-pointer"
              layout="responsive"
              src={src}
              alt="portfolio images"
            />
          </a>

          <a href={codeLink} target="_blank">
            <button
              className="codeButton absolute top-1 right-1"
            >
              Code <FaGithubSquare className="text-lg ml-2" />
            </button>
          </a>
        </div>

        <div className="flex my-2 justify-between gap-2 m-2">
          <p className="text-[#fdeed4] dark:text-teal-500">{title}</p>

          <a href={demoLink} target="_blank">
            <button className='normalButton px-2'>
              View <BsBoxArrowInUpRight className="text-lg ml-2" />
            </button>
          </a>
        </div>
      </div>
    );
};

export default PortfolioCard;