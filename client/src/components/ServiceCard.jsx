import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
      case "TOGGLE_READ_MORE":
        return {
          ...state,
          [action.serviceName]: !state[action.serviceName],
        };
      default:
        return state;
    }
}

function ServiceCard({service}) {
    const initialState = {
        webDevReadMore: false,
        webDesReadMore: false,
        appDevReadMore: false,
    };
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const toggleReadMore = (serviceName) => {
        dispatch({ type: "TOGGLE_READ_MORE", serviceName });
    };

  return (
    <div
        className="w-full md:w-[22rem] h-fit mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl dark:shadow-slate-700 dark:shadow-lg relative overflow-hidden"
        key={service.title}
    >
        <div className='w-full h-52 absolute top-0 rounded-t-xl overflow-hidden'>
            <img
                src={service.img_url}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-110 duration-500"
            />
        </div>

        <h3 className="text-lg font-medium py-2 mt-52 ">{service.title}</h3>
        <p
            className={`${
            state[service.serviceName] ? "h-auto " : "h-32 overflow-hidden"
            } text-[#fdeed4] text-base px-2 text-justify`}
        >
            {service.content}
        </p>

        <button
            className="normalButton my-2"
            onClick={() => toggleReadMore(service.serviceName)}
        >
            {state[service.serviceName] ? (
            <span>Read Less</span>
            ) : (
            <span>Read More</span>
            )}
        </button>
    </div>
  )
}

export default ServiceCard