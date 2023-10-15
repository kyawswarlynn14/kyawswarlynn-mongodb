import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { getItemsByName, getSocials } from "../services";

export default function Main() {
  const [data, setData] = useState([]);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getItemsByName("kyaw swar lynn").then(data => {
      setData(data);
    })

    getSocials().then(data => {
      setAccounts(data);
    })
  },[])
  
  return (
    <div id="home" className="pt-8 text-center md:w-[80%] mx-auto">
      <h2 className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl m-0">
        {data?.title}
      </h2>

      <h3 className="text-lg md:text-2xl py-5 tracking-wider font-semibold">
        {data?.position}
      </h3>

      <p className="tracking-wider leading-8 text-[#fdeed4] max-w-5xl mx-auto md:text-xl">
        {data?.description}
      </p>

      <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between my-4 ">
        {accounts?.map(acc => {
          let iconComponent;

          if (acc.name == "Github") {
            iconComponent = <AiFillGithub cursor="pointer" />;
          } else if (acc.name == "Facebook") {
            iconComponent = <AiFillFacebook cursor="pointer" />;
          } else if (acc.name == "Linkedin") {
            iconComponent = <AiFillLinkedin cursor="pointer" />;
          } else {
            iconComponent = <FaTelegram cursor="pointer" />;
          }

          return (
            <a className="iconStyle" href={acc.link} target="_blank" rel="noreferrer"
            >
              {iconComponent}
            </a>
          );
        })}
      </div>

      <div className="mx-auto rounded-full w-64 h-64 relative overflow-hidden mt-6 md:h-80 md:w-80 transform transition-all hover:scale-110 duration-500">
        <img property="priority" src={data?.img_url} alt="ksl"/>
      </div>
    </div>
  );
}
