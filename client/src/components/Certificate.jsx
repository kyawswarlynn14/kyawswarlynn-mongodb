import React, { useEffect, useState } from 'react'
import { getCertificates } from '../services';

function Certificate() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCertificates().then((data) => {
            setData(data);
        })
    }, [])

  return (
    <div id='certificates' className="pageMainDiv">
        <h3 className="subTitle mb-8">Certifications</h3>

        {data?.map(d => (
            <div className='w-full md:flex gap-4 shadow-2xl dark:shadow-slate-700 p-4 rounded-lg'>
                <div className='md:w-[40%] flex flex-col items-center gap-4'>
                    <p className='font-mono font-semibold text-center text-lg md:text-xl underline underline-offset-4'>
                        {d?.title}
                    </p>

                    <p className="text-justify text-[#fdeed4]">
                        {d?.content}
                    </p>

                    <a href={d?.demo_link} className='normalButton px-8'>
                        Virefy Here
                    </a>
                </div>

                <div className="md:flex-1 mt-2">
                    <img
                    className="w-full h-auto"
                    src={d?.img_url}
                    alt="certificate image"
                    />
                </div>
            </div>
        ))}

    </div>
  )
}

export default Certificate