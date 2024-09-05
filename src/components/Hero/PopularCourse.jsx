
const PopularCourse = () => {
  return (
    <div className="bg-zinc-100 w-full h-80">
        <div className="pt-4 flex gap-20">
          <h1 className=" pl-10 mr-10 font-bold">Popular Course</h1>
          <p className="ml-96 text-[#7455F7] font-medium text-sm cursor-pointer">View All</p>
        </div>
        
        <div className="flex flex-row gap-3 mt-5">
        <div className=" ml-10 h-64 w-56 bg-white rounded-lg shadow-sm">
          <div className="">
          <div className="h-36 w-52 rounded-lg mx-2 my-2 bg-orange-500"></div>
          <div className="absolute text-[#7455F7] translate-x-36 -translate-y-12"><span className="px-1 py-1 rounded-2xl bg-white">$400</span></div>
          </div>
          <p className="text-sm font-semibold text-[#7455F7] ml-2 ">DESIGN</p>
          <h3 className="text-base font-semibold  ml-2 ">Create 3D With <br/>Blender</h3>
          <p className="text-xs ml-2 ">16 Lessons • 48 Hours</p>
        </div>
        <div className=" h-64 w-56 bg-white rounded-lg shadow-sm">
        <div>
          <div className="h-36 w-52 rounded-lg mx-2 my-2 bg-orange-500"></div>
          <div className="absolute text-[#7455F7] translate-x-36 -translate-y-12"><span className="px-1 py-1 rounded-2xl bg-white">$100</span></div>
          </div>
          <p className="text-sm font-semibold text-[#7455F7] ml-2 ">BUSINESS</p>
          <h3 className="text-base font-semibold  ml-2 ">Digital Marketing</h3><br/>
          <p className="text-xs ml-2 ">30 Lessons • 48 Hours</p>
        </div>
        
        <div className=" h-64 w-56 bg-white rounded-lg shadow-sm">
        <div>
          <div className="h-36 w-52 rounded-lg mx-2 my-2 bg-orange-500"></div>
          <div className="absolute text-[#7455F7] translate-x-36 -translate-y-12"><span className="px-1 py-1 rounded-2xl bg-white">$100</span></div>
          </div>
          <p className="text-sm font-semibold text-[#7455F7] ml-2 ">CODE</p>
          <h3 className="text-base font-semibold  ml-2 ">Slicing Ul Design <br/>With Tailwind</h3>
          <p className="text-xs ml-2 ">30 Lessons • 48 Hours</p>
        </div>
        </div>
    </div>
  )
}

export default PopularCourse