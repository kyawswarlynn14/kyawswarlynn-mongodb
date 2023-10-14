import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const PortfolioCard = ({ src, codeLink, demoLink, demoText }) => {
    return (
      <div className=" shadow-2xl dark:shadow-slate-700 dark:shadow-lg rounded-xl flex flex-col justify-between gap-2 hover:scale-105 duration-500">
        <div className="relative">
          <Link href={demoLink} target="_blank">
            <img
              className="h-auto md:max-h-64 w-full rounded-t-xl object-cover cursor-pointer"
              layout="responsive"
              src={src}
              alt="portfolio images"
            />
          </Link>

          <Link href={codeLink} target="_blank">
            <button
              className="absolute top-1 right-1"
            >
              Code <FaGithubSquare className="text-lg ml-2" />
            </button>
          </Link>
        </div>

        <div className="flex my-2 justify-between gap-2 m-2">
          <p className="text-[#fdeed4] dark:text-teal-500">{demoText}</p>

          <Link href={demoLink} target="_blank">
            <button className='p-2 bg-slate-500'>
              View <BsBoxArrowInUpRight className="text-lg ml-2" />
            </button>
          </Link>
        </div>
      </div>
    );
};

export default PortfolioCard;