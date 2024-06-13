import { collection, doc, getDoc, getDocs, increment, query, updateDoc, where } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fireDb } from "../../firebase/links";
import Loader from "../../Components/Loader/Loader";

const Linksredirect = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  function checkValidURL(url) {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!regex.test(url)) {
      return false;
    } else {
      return true;
    }
  }

  const params = useParams();

  async function fetchLinkData() {
    try {
      const linksCollection = collection(fireDb, "Links");
      const q = query(linksCollection, where("shortLink", "==", params.id));
      const querysnapshot = await getDocs(q);

      if (!querysnapshot.empty) {
        querysnapshot.forEach((docu) => {
          const linkData =docu.data();
          const docRef = doc(fireDb,"Links",docu.id);
          let validUlr = checkValidURL(docu.data().longLink);
          setLoad(false)
          updateDoc(docRef,{count:increment(1)});
          if (validUlr) {
            
            window.location.assign(`${docu.data().longLink}`);
          } else {
            setData(docu.data().longLink);
          }
        });
      } else {
        console.log("not query");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLinkData();
  }, [params]);

  return (
    <>
     <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] overflow-hidden ">
     {load === true ? (
      <div>
          <h1 className="font-bold text-3xl">Redirect URL</h1>
          <Loader />
          </div>
      ) : (
        <h1 className="font-bold text-3xl">{data}</h1>
      )}
     </div>
    </>
  );
};

export default Linksredirect;
