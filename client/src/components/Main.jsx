import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

export default function Main() {
  
  return (
    <div id="home" className="pt-8 text-center md:w-[80%] mx-auto">
      <h2 className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl m-0">
        Kyaw Swar Lynn
      </h2>

      <h3 className="text-lg md:text-2xl py-5 tracking-wider font-semibold">
        Software Developer!
      </h3>

      <p className="tracking-wider leading-8 text-[#fdeed4] max-w-5xl mx-auto md:text-xl">
        Freelancer providing services for Web Applications and Mobile Applications.{" "}
        <br />
        Join me down below and let&apos;s start working!
      </p>

      <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between my-4 ">
        <a
          className="iconStyle"
          href="https://github.com/kyawswarlynn14"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub cursor="pointer" />
        </a>

        <a
          className="iconStyle"
          href="https://web.facebook.com/profile.php?id=100027180840462"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook cursor="pointer" />
        </a>

        <a
          className="iconStyle"
          href="https://linkedin.com/in/kyaw-swar-lynn-78ab79260/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin cursor="pointer" />
        </a>

        <a
          className="iconStyle"
          href="https://t.me/kyawswarlynn14"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram cursor="pointer" />
        </a>
      </div>

      <div className="mx-auto rounded-full w-64 h-64 relative overflow-hidden mt-6 md:h-80 md:w-80 transform transition-all hover:scale-110 duration-500">
        <img property="priority" src={'http'} alt="ksl"/>
      </div>
    </div>
  );
}
