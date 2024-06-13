import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, fireDb } from "../../firebase/links";
import toast from "react-hot-toast";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [loader, setLoader] = useState(false);
  const [allLinks, setAllLinks] = useState([]);
  const [user, setUser] = useState();
  const [userDetails,setUserDetails] = useState('');
  const [sum,setSum] = useState(0);

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,34,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [shortLink, setShortLink] = useState("");
  const string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  function generateId() {
    let id = "";
    for (let i = 0; i < 6; i++) {
      id += string[Math.floor(Math.random() * string.length)];
    }
    return id;
  }

  async function shortLinkgenerate(longLink) {
    setLoader(true);
    let uniqueId = generateId();
    let linkRef = collection(fireDb, "Links");


    try {
      await addDoc(linkRef, {
        longLink: longLink,
        shortLink: uniqueId,
        time: Timestamp.now(),
        date: new Date().toLocaleString("es-us", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        count:0,
        userId: user ? user : "1",
      });
      console.log(import.meta.env.VITE_BASE_URL);
      let s = `${import.meta.env.VITE_BASE_URL}${uniqueId}`;
      setLoader(false);
      setShortLink(s);
    } catch (error) {
      console.log(error);
    }
  }

  function copyLink(text) {
    navigator.clipboard.writeText(text);
    toast.success("Copy link successfully");
  }

  async function getAllLinks() {
    try {
      setLoader(true);
      const linkRef = collection(fireDb, "Links");
      const q = query(linkRef, where("userId", "==", user));
      const querySnapShot = await getDocs(q);
      let linkArr = [];
      querySnapShot.forEach((doc) => {
        linkArr.push({ ...doc.data(), id: doc.id });
      });
      setAllLinks(linkArr);
      setLoader(false);
      return linkArr;
    } catch (error) {
      setLoader(false);
      console.log(error);
      toast.error("Error");
    }
  }

  function sumOFAllLinkCount(){
    let k = 0;
    if(allLinks.length > 0){
      allLinks.forEach((link) => {
        if(link.count){
          k += link.count;
        }
       });
       setSum(k);
    }
  }

  useEffect(()=>{
    sumOFAllLinkCount();
  },[getAllLinks])


  async function getUserDetail(id){
    const collRef = doc(fireDb,"Users",id);
    const docSnap = await getDoc(collRef);
    if(docSnap.exists()){
     setUserDetails(docSnap.data());
    }else{
      toast.error("User not found");

    }
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("uuui");
    if (storedUser) {
      getUserDetail(storedUser);
      setUser(storedUser);
    }
  }, [user,setUser]);

  useEffect(() => {
    if (user) {
      getAllLinks();
    }
  }, [user,shortLink,]);

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        shortLinkgenerate,
        shortLink,
        setShortLink,
        copyLink,
        loader,
        allLinks,
        user,
        setUser,
        userDetails,
        sum
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
