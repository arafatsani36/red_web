// import React from 'react';


import LeftSideBar from "@/component/LeftSideBar/LeftSideBar";

import Main from "@/component/Main/Main";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative ">
      <div className="xl:max-w-[70vw] w-full h-full flex relative">
        {/* left sidebar start */}
          <LeftSideBar></LeftSideBar>
        {/* left sidebar end */}
        <Main></Main>

         <section className="sticky top-2 w-full hidden h-screen overflow-y-scroll no-scrollbar  mt-2 xl:flex flex-col items-stretch  overflow-x-h pl-6">
          <div className="">
            <div className=" relative w-full h-full group">
              
              <input type="text" name="" id="searchBox" placeholder="Search" className="w-full h-full rounded-xl py-2 px-7 outline-none bg-transparent border-2 border-gray-200 focus:border-primary/70 peer bg-slate-500"/>
              <label htmlFor="searchBox" className=" absolute text-gray-500 peer-focus:text-primary top-0 left-0 h-full flex items-center justify-center">
                <FaSearch className="w-6 h-6 pl-2 "/>
              </label>
            </div>
          </div>
          <div className=" bg-slate-100 px-4 py-4 mt-4 rounded-lg">
            <h2 className=" text-xl font-bold">Subscribe to Premium</h2>
            <p className=" text-sm text-slate-700 my-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className=" bg-black text-white py-2 px-4 rounded-full hover:bg-black/75">Subscribe</button>
          </div>
          <div>
            <div className="flex flex-col bg-slate-100 mt-4 rounded-lg">
             <h2 className=" text-xl font-bold mt-3 ml-4">Trends for you</h2>
              <div>
                {
                  Array.from({length:5}).map((_,i) => (
                    <div key={i} className=" hover:bg-slate-200 p-4 last:rounded-b-lg cursor-pointer transition duration-200">
                        
                        <div>
                          #Trending item {i + 1}
                        </div>
                        <div>
                            <p className=" text-sm text-slate-500">33.3k post</p>
                        </div>
                    </div>
                  ))
                }
              </div>
            </div>
              

              <div className="mt-4 bg-slate-100 rounded-lg">
              <h2 className=" text-xl font-bold pt-4 ml-4">Who to follow</h2>
                {
                    Array.from({length:5}).map((_,i) => (
                      <div key={i} className=" hover:bg-slate-200 p-4 last:rounded-b-lg cursor-pointer transition duration-200 flex items-center justify-between">
                          
                          <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
                          <div>
                            <h4>WebDeveloper.1</h4>
                            <p className=" text-sm text-slate-500">@webdeveloper</p>
                          </div>
                          <div>
                          <button className=" bg-black text-white py-2 px-3 rounded-full hover:bg-black/75">Follow</button>
                          </div>
                      </div>
                    ))
                  }
              </div>
            
          </div>
          <div></div>
         
         </section>
      </div>
      
    </div>
  );
};

export default page;