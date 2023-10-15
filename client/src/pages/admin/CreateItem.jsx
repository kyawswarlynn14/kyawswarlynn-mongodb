
import {useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import { CreateOneItem } from "../../services";

function CreateItem() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        title: "",
        position: "",
        description: "",
        img_url: "",
        fb_url: "",
    });

    const handleImageChange = () => (event) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
          uploadImage(selectedFile);
        }
    };

    const uploadImage = (file) => {
        const imageRef = ref(storage, `items/${file.name + v4()}`);
        uploadBytes(imageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setValues({...values, img_url: url, fb_url: imageRef._location.path});
          });
        });
    };

    const handleChange = (e) => {
          const { name, value } = e.target;
          setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await CreateOneItem(values);
        setIsLoading(false);
        navigate('/admin')
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
            Create An Item
          </h2>

          <div className="flex flex-col justify-between gap-4">

            <div className="flex gap-2">
                <input
                type="file"
                className="input"
                name="img_url"
                onChange={handleImageChange()}
                />

                {values.img_url && (
                    <img className="object-cover w-20 h-auto" src={values.img_url} alt="item image" />
                )}
            </div>

            <input
              required
              type="text"
              placeholder="Title"
              className="input"
              name="title"
              value={values.title}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="position"
              className="input"
              name="position"
              value={values.position}
              onChange={handleChange}
            />

            <textarea
              rows={4}
              required
              type="text"
              placeholder="Description"
              className="input"
              name="description"
              value={values.description}
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

export default CreateItem;