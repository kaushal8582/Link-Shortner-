import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { fireDb } from "../../firebase/links";
import toast from "react-hot-toast";
import { useContext } from "react";
import myContext from "../../context/data/MyContext";

const ShowLinks = ({ shortLink, longLink, date, id,count }) => {
  const context = useContext(myContext);
  const { copyLink } = context;

  async function deleteLinks(id) {
    try {
      await deleteDoc(doc(fireDb, "Links", id));
      toast.success("Link deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting link");
    }
  }

  return (
    <div className="bg-white rounded-xl p-3 flex flex-col md:flex-row items-center justify-between mt-6">
      <div className="w-full md:w-[50%] flex flex-col items-start md:items-center gap-6 justify-center px-2">
        <div className="w-full">
          <h1 className="text-xl font-bold">Long Link</h1>
          <div className="flex gap-2 items-center">
            <img
              onClick={() => copyLink(longLink)}
              className="h-7 cursor-pointer"
              src="/img/copy.png"
              alt="copy btn"
            />
            <p className="break-all">{longLink}</p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl font-bold">Short Link</h1>
          <div className="flex gap-2 items-center">
            <img
              onClick={() => copyLink(shortLink)}
              className="h-7 cursor-pointer"
              src="/img/copy.png"
              alt="copy btn"
            />
            <p>{shortLink}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[50%] flex flex-col items-center justify-center mt-4 md:mt-0">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <img className="h-8" src="/img/dahsboard.png" alt="dashboard" />
            <h3>-{count}</h3>
          </div>
          <div>
            <h2>{date}</h2>
          </div>
          <button
            onClick={() => deleteLinks(id)}
            className="bg-red-500 text-white px-4 py-1 rounded-2xl font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowLinks;
