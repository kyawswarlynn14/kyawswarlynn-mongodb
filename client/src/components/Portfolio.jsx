import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { getItemsByName, getPortfolios } from "../services";

function Portfolio() {
  const [data, setData] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    getItemsByName("portfolio").then(data => {
      setData(data);
    })

    getPortfolios().then(data => {
      setPortfolios(data);
    })
  },[])

  return (
    <div id="portfolio" className="pageMainDiv">
      <h3 className="subTitle">
        {data?.title}
      </h3>

      <p className="text-md py-2 leading-8 text-justify">
        {data?.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-4">
        {portfolios?.map((data, index) => (
          <PortfolioCard key={index} src={data.img_url} codeLink={data.code_Link} demoLink={data.demo_Link} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
