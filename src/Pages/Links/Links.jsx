import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ShowLinks from "../../Components/ShowLinks/ShowLinks";
import { useContext } from "react";
import myContext from "../../context/data/MyContext";
import Loader from "../../Components/Loader/Loader";

const Links = () => {
  const context = useContext(myContext);

  const [longLink, setLongLink] = useState("");
  const [showLink, setShowLinks] = useState([]);

  const {
    shortLinkgenerate,
    shortLink,
    setShortLink,
    copyLink,
    loader,
    allLinks,
    user,
  } = context;

  function generateShortLink() {
    setShortLink("");
    if (longLink.length > 0) {
      shortLinkgenerate(longLink);
    }
  }

  function copyPopularLink() {
    let links = [];
    for (let i = 0; i < (allLinks.length >= 5 ? 5 : allLinks.length); i++) {
      links.push(allLinks[i]);
    }

    setShowLinks(links);
    console.log(showLink);
  }
  useEffect(() => {
    copyPopularLink();
  }, [allLinks]);

  return (
    <Layout>
      <div>
        <h1 className="text-center font-medium mt-3 text-2xl md:text-3xl">
          Your link is safe and secure🥰
        </h1>
      </div>

      <div className="flex flex-col items-center pt-14 px-5">
        <div className="border-white border-2 rounded-lg h-11 w-full md:w-[75%] lg:w-[50%] bg-white overflow-hidden">
          <input
            onChange={(e) => setLongLink(e.target.value)}
            value={longLink}
            className="bg-transparent h-full w-[70%] rounded-lg pl-3 outline-none"
            type="text"
            placeholder="Paste your link....."
          />
          <button
            onClick={generateShortLink}
            className="bg-[#98F9ED] h-full w-[30%] font-bold text-black"
          >
            Generate
          </button>
        </div>

        {loader === true ? <Loader /> : ""}

        {shortLink && (
          <div
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center mt-5 ${
              loader === true
                ? "pointer-events-none opacity-[0.4]"
                : "pointer-events-auto opacity-1"
            } `}
          >
            <h2 className="font-semibold">{shortLink}</h2>
            <button
              onClick={(e) => copyLink(shortLink)}
              className="bg-[#00ADB5] text-white px-5 py-2 text-lg md:text-2xl font-semibold rounded-3xl"
            >
              Copy
            </button>
          </div>
        )}
      </div>

      <h1 className="text-center mt-14 font-bold text-2xl md:text-3xl">
        Your Popular links 😎
      </h1>

      {user && (
        <div className="mb-5 px-5">
          {showLink.map((link) => {
            return (
              <div key={link.id} className="mt-5">
                <ShowLinks
                  date={link.date}
                  longLink={link.longLink}
                  shortLink={link.shortLink}
                  id={link.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default Links;
