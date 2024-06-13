import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import ShowLinks from "../../../Components/ShowLinks/ShowLinks";
import { useContext } from "react";
import myContext from "../../../context/data/MyContext";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../../firebase/links";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [sum, setSum] = useState();
  const context = useContext(myContext);
  const navigate = useNavigate();
  const { allLinks, setShortLink, setUser, userDetails } = context;

  function sumOFAllLinkCount() {
    let k = 0;
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.count) {
          k += link.count;
        }
      });
      setSum(k);
    }
  }

  useEffect(() => {
    sumOFAllLinkCount();
  }, [allLinks]);

  async function logout() {
    try {
      await signOut(auth);
      toast.success("User signed out");
      setShortLink("");
      navigate("/login");
      localStorage.removeItem("uuui");
      setUser(null);
    } catch (error) {
      console.log("Sign out error ", error);
      toast.error("Error");
    }
  }

  return (
    <Layout>
      <div className="pt-10 px-4 md:px-10 lg:px-28">
        <div className="bg-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-9 rounded-2xl shadow-2xl py-6">
          <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] overflow-hidden rounded-full bg-gray-800 border-2 border-white">
            <img
              className="w-full h-full object-cover"
              src="/img/profile.png"
              alt="Profile"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-xl md:text-2xl">
              {userDetails.name}
            </h2>
            <p>{userDetails.email}</p>
            <p>
              Total Links: <span>{allLinks.length}</span>
            </p>
            <p>
              Total Clicks: <span>{sum}</span>
            </p>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-1 rounded-2xl font-semibold mt-4 md:mt-2"
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="mt-10">
          {allLinks.length > 0
            ? allLinks.map((link) => {
                return (
                  <div key={link.id} className="mb-6">
                    <ShowLinks
                      longLink={link.longLink}
                      shortLink={link.shortLink}
                      date={link.date}
                      id={link.id}
                      count={link.count}
                    />
                  </div>
                );
              })
            : "No links available"}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
