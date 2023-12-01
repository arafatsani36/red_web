// import React from 'react';

import LeftSideBar from "@/component/LeftSideBar/LeftSideBar";

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative mt-2'>
      <div className=' max-w-screen-lg w-full h-full flex relative '>
        {/* left sidebar start */}
          <LeftSideBar></LeftSideBar>
        {/* left sidebar end */}

        <main className="ml-[280px] flex w-[600px] h-full min-h-screen p-5 flex-col border-l-[0.5px] border-r-[0.5px] border-gray-200">
         <h2>Gome</h2>
         <div className="border-t-[0.5px] border-b-[0.5px] h-32 relative">
            <div>
              
            </div>
            <div></div>
         </div>
        </main>
        {/* <section>Right sidebar</section> */}
      </div>
      
    </div>
  );
};

export default page;