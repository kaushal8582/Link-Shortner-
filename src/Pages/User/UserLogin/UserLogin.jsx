import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/links";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../../context/data/MyContext";
import { useContext } from "react";


const UserLogin = () => {

  const cotext = useContext(myContext);
  const {setUser} = cotext

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email || formData.password) {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then((id) => {
        toast.success("Login user successfully");
        localStorage.setItem("uuui",id.user.uid)
        setUser(id.user.uid)
        navigate("/dashboard")
        
      }).catch((error)=>{
        console.log(error);
        toast.error("error login");
      })
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
           
          </div>
          <h2 className="mt-3">Not have an account <Link className="text-blue-500" to={"/signin"}>Create</Link> </h2>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
