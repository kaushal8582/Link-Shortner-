import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../context/data/MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [longLink, setLongLink] = useState("");
  const context = useContext(myContext);
  const { shortLinkgenerate, shortLink, setShortLink, copyLink, allLinks } = context;

  console.log(allLinks);

  function generateLiks() {
    setShortLink('');
    if (longLink.length > 0) {
      shortLinkgenerate(longLink);
    }
  }

  return (
    <Layout>
      <div className=" mb-5 flex flex-col lg:flex-row items-center justify-between pt-[7rem] px-5 md:px-10 lg:px-20">
        <div className="w-full lg:w-[50%] mb-10 lg:mb-0 lg:pl-[2.5rem]">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">
            Build Strong Digital{" "}
            <span className="text-[#FF008A]">Connection</span>
          </h1>
          <p className="w-full md:w-[80%] text-gray-500 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quisquam veniam alias ipsum quo, autem libero voluptas? Pariatur
            natus adipisci facilis sint. Enim, nobis. Adipisci aspernatur
            repellendus deserunt odit accusamus a quia eius, sit, nulla,
            voluptatibus ratione excepturi corrupti perferendis?
          </p>
          <button className="bg-[#00ADB5] text-white p-3 text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl mt-11">
            <Link to={"/dashboard"}>Track Your Link</Link>
          </button>
        </div>

        <div className="w-full lg:w-auto">
          <div className="bg-[#393E46] rounded-xl w-full lg:w-[500px] text-white p-5">
            <div className="border-white border-2 rounded-lg h-11 flex">
              <input
                onChange={(e) => setLongLink(e.target.value)}
                value={longLink}
                className="bg-transparent h-full w-[75%] rounded-lg pl-3 outline-none"
                type="text"
                placeholder="Paste your link..."
              />
              <button
                onClick={generateLiks}
                className="bg-[#98F9ED] h-full w-[25%] font-bold text-black"
              >
                Generate
              </button>
            </div>

            {shortLink && (
              <div className="flex items-center h-[4rem] w-full justify-between mt-5">
                <h2 className="break-all">{shortLink}</h2>
                <button
                  onClick={() => copyLink(shortLink)}
                  className="bg-[#00ADB5] text-white px-5 py-2 text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl"
                >
                  Copy
                </button>
              </div>
            )}

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-8">
              Track your link <br />
              <span className="text-[#05FFFF]">Free</span>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
