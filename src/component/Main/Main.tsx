
"use client"
import { LuDot } from "react-icons/lu";
import { BsChat, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { CiBookmark, CiSettings } from "react-icons/ci";
import { LuShare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineGif } from "react-icons/hi2";
import { TfiGallery } from "react-icons/tfi";

const Main = () => {
    return (
    <main className="flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-200">
            <div className="flex items-center justify-between pt-5 pb-3 md:pl-8 pr-2 border-b border-gray-200">
                <div className=" cursor-pointer hover:text-slate-500 duration-200 transition">
                  <h2 className=" text-base font-bold">For you</h2>
                </div>
                <div className=" cursor-pointer hover:text-slate-500 duration-200 transition ">
                  <h2 className=" text-base font-bold">Following</h2>                    
                </div>
                <div>
                  <CiSettings className=" text-2xl cursor-pointer hover:text-slate-500 duration-200 transition"/>
                </div>   
            </div>

            <div className="flex items-center justify-between px-4 g-4 py-4">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>
              <div>
                <input type="text" className=" border-2 border-gray-200 mx-4 w-80 h-full rounded-xl py-2 px-4  outline-none" placeholder="What is happening?!"/>
              </div>
              <div className="flex items-end justify-end gap-4 ">
              <TfiGallery className=" text-xl text-primary cursor-pointer"/>
              <HiOutlineGif className=" text-2xl text-primary cursor-pointer"/>
              </div>
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