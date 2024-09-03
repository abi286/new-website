import React from "react";

const Navbar = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-0px">
      {/* side navbar */}
      <div className="row-span-3 columns-1 w-80 h-dvh border-r border-gray-300">
        <div>
          <h1 className="text-3xl text-violet-600 font-bold p-5">T-Course</h1>
        </div>
        <div className="h-96 p-10 border-b border-gray-300">
          <div className="px-5 py-3"><a href="#dashboard">Dashboard</a></div>
          <div className="px-5 py-3"><a href="#dashboard">My Course</a></div>
          <div className="px-5 py-3"><a href="#dashboard">Saved Course</a></div>
          <div className="px-5 py-3"><a href="#dashboard">Report</a></div>
          <div className="px-5 py-3"><a href="#dashboard">Explore Course</a></div>
          <div className="px-5 py-3"><a href="#dashboard">Sertificate</a></div>
          <div className="px-5 py-3"><a href="#dashboard">Transaction</a></div>
        </div>
        <div className="h-80 p-10">
        <div className="px-5 py-3"><a href="#dashboard">Help Center</a></div>
        <div className="px-5 py-3"><a href="#dashboard">Settings</a></div>
        </div>
      </div>
      {/* upper navbar */}
      <div className="col-span-2">
        <div className="p-5">
          <input type="text" 
          placeholder="Try search programming course"
          className="w-[300px] sm:w-[300px] group-hover:w-[300px] p-2 border-0 border-gray-500"/>
        </div>
      </div>
      {/* main content */}
      <div className="row-span-2 col-span-2">

      </div>
    </div>
  )
}

export default Navbar