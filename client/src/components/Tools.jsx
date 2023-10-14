import React from "react";
import { FaAngular, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import {BiLogoPostgresql, BiLogoMongodb, BiLogoAws, BiLogoDigitalocean } from 'react-icons/bi';
import {SiMysql, SiMicrosoftazure, SiPostman} from 'react-icons/si';

function Tools() {
  return (
    <div id="tools" className="pageMainDiv">
        <h1 className="subTitle">
          Technologies I Use
        </h1>

        <div className="mt-8 justify-between mx-auto flex gap-8 flex-wrap">
          <div className="tool">
            <h5 className="toolTitle">Backend</h5>

            <div className="toolItem">
                <FaNodeJs size={25} /> Nodejs
            </div>

            <div className="toolItem">
                <FaPython size={25}/>
                Python
            </div>

          </div>

          <div className="tool">
            <h5 className="toolTitle">Database</h5>

            <div className="toolItem">
              <BiLogoPostgresql size={25} />
                PostgreSQL
            </div>

            <div className="toolItem">
              <SiMysql size={25} />
                MySQL
            </div>

            <div className="toolItem">
              <BiLogoMongodb size={25} />
                MongoDB
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Frontend</h5>

            <div className="toolItem">
              <FaReact size={25} /> React
            </div>

            <div className="toolItem">
              <FaAngular size={25} />
              Angular
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Mobile</h5>

            <div className="toolItem">
              <RiFlutterFill size={25} /> Flutter
            </div>

            <div className="toolItem">
              <FaReact size={25} />
              ReactNative
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Clouds and DevOps</h5>

            <div className="toolItem">
              <BiLogoAws size={25} />
              Amazon Web Services
            </div>

            <div className="toolItem">
              <BiLogoDigitalocean size={25} />
              Digital Ocean
            </div>

            <div className="toolItem">
              <SiMicrosoftazure size={23} />
              Azure
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Testing</h5>

            <div className="toolItem">
              <SiPostman size={25} />
              Postman
            </div>
          </div>
        </div>
    </div>
  );
}

export default Tools;
