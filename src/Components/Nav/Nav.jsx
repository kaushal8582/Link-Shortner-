import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../context/data/MyContext";
import NavSlide from "../NavSlide/NavSlide";

const Nav = () => {
  const context = useContext(myContext);
  const { user } = context;
  const [validate, setValidate] = useState(false);
  const [left,setLeft] = useState("0%");

  useEffect(() => {
    if (user) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [user]);

  return (
    <div className="rounded-lg h-[60px] w-full bg-[#222831] flex items-center justify-between px-5 md:px-9 text-white">
      <div className="text-white font-bold text-2xl md:text-3xl">
        <Link to={"/"}>ILink</Link>
      </div>

      <ul className="hidden md:flex items-center gap-5 md:gap-10 font-medium">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/link"}>Url Shortener</Link>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-2">
        {validate ? (
          <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
            <Link to={"/dashboard"}>
              <img
                className="w-full h-full object-cover"
                src="/img/profile.png"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <div className="text-sm md:text-base">
            <Link to={"/signin"}>Sign In</Link>/
            <Link to={"/login"} className="text-blue-400">
              Login
            </Link>
          </div>
        )}
      </div>

      <div className="block md:hidden">
        <button onClick={()=>setLeft("0%")} id="menu-btn" className="text-white">
          &#9776;
        </button >
      </div>
      {/* <NavSlide  left={left} setLeft={setLeft}/> */}
    </div>
  );
};

export default Nav;
