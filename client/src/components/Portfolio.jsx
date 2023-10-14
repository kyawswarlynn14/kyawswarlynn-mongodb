import React from "react";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <div id="portfolio" className="pageMainDiv">
      <h3 className="subTitle">
        Portofolio
      </h3>

      <p className="text-md py-2 leading-8 text-justify">
        I have successfully built various projects using{" "}
        <span className="text-[#00FF00] dark:text-teal-500">React Js, Next Js, Node Js and Express Js.</span> Proficient in React.js and Next.js, I also possess strong backend skills in Node.js and Express.js. I specialize in database management using Sequelize, with expertise in MySQL and PostgreSQL. My portfolio showcases dynamic, user-friendly web interfaces and fast, engaging experiences, seamlessly integrating frontend and backend technologies.
      </p>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-4">
        {portfolioData?.map((data, index) => (
          <PortfolioCard key={index} src={data.src} codeLink={data.codeLink} demoLink={data.demoLink} demoText={data.demoText} />
        ))}
      </div> */}
    </div>
  );
}

export default Portfolio;
