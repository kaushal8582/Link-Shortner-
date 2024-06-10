import React from "react";
import Layout from "../../Components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="pt-5">
        <div className="w-full h-[300px] overflow-hidden bg-gray-500 rounded-xl grid place-items-center text-white ">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-[3rem]">About Us</h2>
        </div>

        <div>
          <h2 className="text-center pt-3 font-bold text-3xl md:text-4xl lg:text-5xl">
            <span className="text-orange-600">Introduction </span>To Our
            <br /> Best Link <span className="text-orange-500">Shortener</span>!
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between pt-11 px-5 md:px-10 gap-6">
            <div className="flex items-center justify-start gap-4 px-5 py-4 rounded-lg bg-white shadow-2xl w-full lg:w-[30%]">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-orange-400 p-2">
                <img className="w-full h-full object-cover" src="/img/witch.png" alt="Fast Response" />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Fast Response</h2>
                <p className="text-gray-500">Your long link is shortened quickly. No waiting a lot of time.</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 px-5 py-4 rounded-lg bg-white shadow-2xl w-full lg:w-[30%]">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-slate-400 p-2">
                <img className="w-full h-full object-cover" src="/img/shield.png" alt="Secure Link" />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Secure Link</h2>
                <p className="text-gray-500">Your link is our safety. Secure your link, don't worry.</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 px-5 py-4 rounded-lg bg-white shadow-2xl w-full lg:w-[30%]">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-black p-2">
                <img className="w-full h-full object-cover" src="/img/pointer.png" alt="Track Your Link" />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Track Your Link</h2>
                <p className="text-gray-500">Create a free account and track your link.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
