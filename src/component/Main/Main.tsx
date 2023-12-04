
"use client"
import { LuDot } from "react-icons/lu";
import { BsChat, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const Main = () => {
    return (
    <main className="flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-200">
            <div>
                <div>
                  
                </div>
                <div>

                </div>
            </div>
            <div className="border-t-[0.5px] border-b-[0.5px]  relative space-x-2 py-4 h-32">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-none"></div>
                <div className="flex flex-col">
                {/* <div className=" border-b-[0.5px] border-gray-400"> */}
                    <input className="w-full h-full bg-transparent outline-none border-none border-b-[0.5px] border-gray-400 p-4 placeholder:text-lg" type="text" placeholder="What is happening?!"/>
                {/* </div> */}
                </div>
            </div>
            </div>
            <div className="flex flex-col">
                <button className=" bg-primary  rounded-full text-white px-6 py-2 w-full text-lg font-semibold hover:bg-opacity-90 transition duration-200">Post</button>
            </div>


          <div>
            {
              Array.from({length:5}).map((_,i) => (
                <div key={i} className="border-t-[0.5px] p-4 flex space-x-2">
                    <div>
                      <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className=" flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 justify-between">
                        <div className="flex items-center space-x-2">
                          <div>
                            <h2 className=" font-bold text-base">Arif Hossain</h2>
                          </div>
                          <div className="flex items-center">
                            <p className=" text-slate-500">@arifhossain</p>
                            <LuDot className=" text-slate-500"/>
                            <p className=" text-slate-500">1h</p>
                          </div>
                        </div>
                        <div className=" cursor-pointer hover:bg-sky-100 hover:text-primary p-2 transition duration-200 rounded-2xl">
                        <BsThreeDots />
                        </div>
                        
                      </div>

                      <div>
                        <p className=" text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium earum deserunt reiciendis dicta sint ipsam quasi pariatur eius rem veniam similique ea, vel illo fugiat eveniet aliquam hic nam. Non.
                        Quibusdam exercitationem asperiores magni vitae harum esse consequatur nihil beatae amet ut architecto similique in, praesentium recusandae</p>
                      </div>
                      <div className=" bg-slate-200 aspect-square w-full h-96 rounded-lg">

                      </div>
                      
                      <div className="flex items-center justify-between space-x-2">
                        <div className=" hover:bg-sky-100 hover:text-primary p-2 transition duration-200 rounded-2xl">
                         <BsChat className="text-lg cursor-pointer"/>
                        </div>
                        <div className=" hover:bg-green-50 hover:text-green-500 p-2 transition duration-200 rounded-2xl">
                         <AiOutlineRetweet className="text-xl cursor-pointer"/>
                        </div>
                        <div className=" hover:bg-pink-100 hover:text-pink-500 p-2 transition duration-200 rounded-2xl">
                          <FaRegHeart className="text-lg cursor-pointer"/>
                        </div>
                        <div className=" hover:bg-sky-100 hover:text-primary p-2 transition duration-200 rounded-2xl">
                         <IoMdStats className="text-xl cursor-pointer"/>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className=" hover:bg-sky-100 hover:text-primary p-2 transition duration-200 rounded-2xl">
                            <CiBookmark className="text-xl cursor-pointer"/>
                          </div>
                          <div  className=" hover:bg-sky-100 hover:text-primary p-2 transition duration-200 rounded-2xl">
                            <LuShare className="text-lg cursor-pointer"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
              ))
            }
          </div>
    </main>
    );
};

export default Main;