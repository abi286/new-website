import { BookmarkMinus } from 'lucide-react';

const PopularCourse = () => {
  return (
    <div className="bg-[#F7F8FA] w-[1010px] h-[420px]">
        <div className="flex justify-between ">
          <h1 className="pl-10 font-semibold text-xl text-[#222F30]">Popular Course</h1>
          <p className=" text-[#7455F7] font-medium text-sm cursor-pointer mr-10">View All</p>
        </div>
        
        <div className="flex flex-row gap-5 mt-5">
        <div className=" ml-10 h-[350px] w-[300px] bg-white rounded-2xl shadow-xl shadow-gray-200">
          <div className="">
            <img src="src/assets/course-1.jpg" alt="" className='h-48 w-[268px] rounded-2xl mx-4 my-4'/>
          <div className="absolute text-[#7455F7] translate-x-[212px] -translate-y-16"><span className="px-[9px] py-[7px] rounded-2xl bg-white">$400</span></div>
          </div>
          <div className='flex justify-between'>
          <p className="text-sm font-semibold text-[#7455F7] ml-4 ">DESIGN</p>
          <BookmarkMinus size={40} color="#7455F7" strokeWidth={3} absoluteStrokeWidth className='px-2 py-2 rounded-full bg-[#EAE6FE] absolute translate-x-60' />
          </div>
          <h3 className="text-lg font-semibold  ml-4 ">Create 3D With <br/>Blender</h3>
          <p className="text-base ml-4 mt-2 ">16 Lessons • 48 Hours</p>
        </div>

        <div className=" h-[350px] w-[300px] bg-white rounded-2xl shadow-xl shadow-gray-200">
          <div className="">
            <img src="src/assets/course2.jpeg" alt="" className="h-48 w-[268px] rounded-2xl mx-4 my-4 bg-orange-500"/>
          <div className="absolute text-[#7455F7] translate-x-[212px] -translate-y-16"><span className="px-[9px] py-[7px] rounded-2xl bg-white">$100</span></div>
          </div>
          <div className='flex justify-between'>
          <p className="text-sm font-semibold text-[#7455F7] ml-4 ">BUSINESS</p>
          <BookmarkMinus size={40} color="#7455F7" strokeWidth={3} absoluteStrokeWidth className='px-2 py-2 rounded-full bg-[#EAE6FE] absolute translate-x-60' />
          </div>
          <h3 className="text-lg font-semibold  ml-4 ">Digital Marketing</h3>
          <p className="text-base ml-4 mt-2 ">30 Lessons • 48 Hours</p>
        </div>

        <div className="h-[350px] w-[300px] bg-white rounded-2xl shadow-xl shadow-gray-200">
          <div className="">
          <img src="src/assets/course3.jpeg" alt="" className="h-48 w-[268px] rounded-2xl mx-4 my-4"/>
          <div className="absolute text-[#7455F7] translate-x-[212px] -translate-y-16"><span className="px-[9px] py-[7px] rounded-2xl bg-white">$100</span></div>
          </div>
          <div className='flex justify-between'>
          <p className="text-sm font-semibold text-[#7455F7] ml-4 ">CODE</p>
          <BookmarkMinus size={40} color="#7455F7" strokeWidth={3} absoluteStrokeWidth className='px-2 py-2 rounded-full bg-[#EAE6FE] absolute translate-x-60' />
          </div>
          <h3 className="text-lg font-semibold  ml-4 ">Slicing Ul Design <br/>With Tailwind</h3>
          <p className="text-base ml-4 mt-2 ">30 Lessons • 48 Hours</p>
        </div>
        </div>
    </div>
  )
}

export default PopularCourse