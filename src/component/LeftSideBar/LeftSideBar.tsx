import React from 'react';
import { MdHome, MdNotifications, MdListAlt, MdOutlineMoreHoriz } from "react-icons/md";
import { FaSearch, FaEnvelope, FaUsers, FaRegUser } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import Link from "next/link";

const navigationItem = [
  {
    title : 'Home',
    icon: MdHome
  },
  {
    title : 'Explore',
    icon: FaSearch
  },
  {
    title : 'Notification',
    icon: MdNotifications
  },
  {
    title : 'Massage',
    icon: FaEnvelope
  },
  {
    title : 'Lists',
    icon: MdListAlt
  },
  {
    title : 'Communities',
    icon: FaUsers
  },
  {
    title : 'Profile',
    icon: FaRegUser
  },
  {
    title : 'More',
    icon: CiCircleMore
  },


]

const LeftSideBar = () => {
    return (
        <div>
            <section className='fixed flex flex-col w-[275px] items-stretch h-screen'>
            <Link href={'/'} className=" text-lg font-bold">Red-web</Link>
               <div className="flex flex-col space-y-4 my-4 items-stretch h-full mt-4">
                {
                  navigationItem.map((item) => 
                  <Link className="flex items-center justify-start w-fit space-x-2  rounded-3xl text-xl py-2 px-6 hover:bg-slate-100 transition duration-200" href={`/${item.title.toLowerCase()}`} key={item.title}>
                      <div>
                        <item.icon/>
                      </div>
                      <div>{item.title}</div>
                      
                      
                  </Link>)
                  }
                <button className=" bg-primary  rounded-full text-white px-2 py-3 text-lg font-semibold hover:bg-opacity-90 transition duration-200">Post</button>
               </div>

               <div>
               <button className="flex items-center text-center space-x-2 w-full rounded-full bg-transparent text-black px-2 py-3 text-lg font-semibold hover:bg-slate-100 transition duration-200 mb-4">
                <div className="flex items-center space-x-2">
                <div className=" rounded-full bg-slate-200 w-12 h-12">
                </div>
                <div>
                  <div>
                    <h4 className="text-base">jakaria hossain sani</h4>
                  </div>
                  <div>
                    <p className=" text-sm text-slate-600 text-start">@jakaria_hossain_</p>
                  </div>
                </div>
                  <div>
                     <p className=" text-lg font-bold ml-4"> 
                      <MdOutlineMoreHoriz/>
                    </p> 
                  </div>
                </div>
               </button>
               </div>
              
          </section>
        </div>
    );
};

export default LeftSideBar;