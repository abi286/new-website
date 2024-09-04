
const PopularCourse = () => {
  return (
    <div className="bg-zinc-100 w-full h-80">
        <div className="pt-12 flex gap-20">
          <h1 className=" pl-10 font-bold">Popular Course</h1>
          <p className="ml-96 text-[#7455F7] font-medium text-sm cursor-pointer">View All</p>
        </div>
        
        <div className="flex flex-row gap-5 mt-5">
        <div className=" ml-10 h-56 w-48 bg-white rounded-lg"></div>
        <div className=" h-56 w-48 bg-white rounded-lg"></div>
        <div className=" h-56 w-48 bg-white rounded-lg"></div>
        </div>
    </div>
  )
}

export default PopularCourse