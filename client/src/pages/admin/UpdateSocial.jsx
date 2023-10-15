
import {useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateOneSocial, getOneSocial } from "../../services";

function UpdateSocial() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [values, setValues] = useState({
      name: "",
      link: ""
    });

    useEffect(() => {
      if (!id) return;
      getOneSocial(id).then(data => {
        setValues(data)
      })
    }, [id])

    const handleChange = (e) => {
          const { name, value } = e.target;
          setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await UpdateOneSocial(id, values);
        setIsLoading(false);
        navigate('/socials')
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred while creating the item: " + error.message);
      }
    };

  return (
    <div className='adminCreatePage'>
      {
        isLoading ? (
          <div className="text-2xl tracking-widest font-bold">Loading...</div>
        ) : (
          <form onSubmit={handleSubmit}
          className=" bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[60%] lg:w-[50%] ">

          <h2 className="text-3xl font-semibold text-center text-pink-400 tracking-widest">
            Update A Social Account
          </h2>

          <div className="flex flex-col justify-between gap-4">
            <input
              required
              type="text"
              placeholder="Account Name"
              className="input"
              name="name"
              value={values.name}
              onChange={handleChange}
            />

            <input
              required
              type="text"
              placeholder="Account Link"
              className="input"
              name="link"
              value={values.link}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-around">
            <button type="button" onClick={() => navigate(-1)} className="actionButton">
                <IoMdArrowRoundBack className="mr-2" /> Back
            </button>
            <button
              type="submit"
              className="actionButton"
            >
              Submit
            </button>
          </div>
          </form>
        )
      }
    </div>
  )
}

export default UpdateSocial;