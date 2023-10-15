import { useEffect, useState } from "react";
import { getItemsByName, getServices } from "../services";
import ServiceCard from "./ServiceCard";

function Service() {
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    getItemsByName("services").then(data => {
      setData(data);
    })

    getServices().then(data => {
      setServices(data);
    })
  },[])

  return (
    <div id="services" className="pageMainDiv">
      <div className=" mb-8 md:text-lg">
        <h3 className="subTitle mb-4">
          {data?.title}
        </h3>

        <p className=" text-md leading-8 text-justify">
          {data?.description}
        </p>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-between gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Service;
