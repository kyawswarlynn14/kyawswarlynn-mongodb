import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
  
    axios
      .post(`api/auth/login`, values)
      .then((response) => {
        if (response.data.returncode == '200') {
          setIsLoading(false);
          return setErrors("User doesn't exist or wrong password!")
        }
        setIsLoading(false);
        navigate('/admin');
        window.location.reload();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err)
      });
  };

  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center">
      {
        isLoading ? (
          <div className="text-2xl font-bold text-white">Loading...</div>
        ) : (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <h5 className="text-xl font-bold text-center text-pink-600">
                Sign in to Admin
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                  onChange={handleInput}
                  value={values.email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                  onChange={handleInput}
                  value={values.password}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 text-white hover:bg-[#f14b99] bg-[#e93b8c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login to Admin
              </button>

              {errors && <p className="font-bold text-black">{errors}</p>}
            </form>
          </div>
        )
      }
    </div>
  )
}

export default Login