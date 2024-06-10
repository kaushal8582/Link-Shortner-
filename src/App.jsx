import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Links from "../src/Pages/Links/Links";
import Dashboard from "../src/Pages/User/UserDashboard/UserDashboard";
import MyState from "./context/data/MyState";
import UserLogin from "./Pages/User/UserLogin/UserLogin";
import UserCreateAccount from "./Pages/User/UserCreateAccount/UserCreateAccount";
import About from "./Pages/About/About";
import { Toaster } from "react-hot-toast";
import Linksredirect from "./Pages/linksredirect/Linksredirect";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/links";
function App() {

  const [user,setUser] = useState();

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }else{
        setUser(null);
      }
    })
    return ()=>unSubscribe();
  },[])


  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="https://link-shortner-vert-three.vercel.app/:id" element={< Linksredirect />} />
            <Route path="/about" element={<About />} />
            <Route path="/link" element={<Links />} />
            <Route path="/dashboard" element={user?<Dashboard />:<UserLogin/>} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signin" element={<UserCreateAccount />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </MyState>
    </>
  );
}

export default App;
