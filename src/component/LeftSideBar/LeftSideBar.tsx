'use client'
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
        <div className="w-[90%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden">
          <section className="w-[30%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden pt-4">
            <Link href={'/'} className=" text-lg font-bold">Red-web</Link>
               <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
                {
                  navigationItem.map((item) => 
                  <Link className="flex items-center justify-start w-fit space-x-2  rounded-3xl text-xl py-2 px-4 hover:bg-slate-100 transition duration-200" href={`/${item.title.toLowerCase()}`} key={item.title}>
                      <div>
                        <item.icon/>
                      </div>
                      <div>{item.title}</div>
                      
                      
                  </Link>)
                  }
                <button className=" md:w-48 bg-primary rounded-full text-white px-2 py-3 text-lg font-semibold hover:bg-opacity-90 transition duration-200">Post</button>
               </div>

               
              
              <button className=" w-64 bg-transparent hover:bg-slate-200 rounded-full text-white px-2 py-3 text-lg font-semibold hover:bg-opacity-90 transition duration-200 mb-2">
                <div className="flex items-center w-full justify-between">
                  <div className=" rounded-full bg-slate-500 w-12 h-12"></div>
                  <div>
                      <h4 className=" text-black text-lg font-semibold">jakariahossain</h4>
                      <p className=" text-start text-black text-sm">@jakariasani</p>
                  </div>
                  <div>
                    <MdOutlineMoreHoriz className="text-lg font-bold ml-4 text-black"/>
                  </div>

                </div>
              </button>

              
          </section>
        </div>
    );
};

export default LeftSideBar;