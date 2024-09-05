
const CourseTable = () => {
  return (
    <div className="overflow-x-auto ml-10">
      <table className="min-w-full bg-transparent ">
        <thead>
          <tr className="bg-transparent border-b-2 border-[#E3E4E6]  text-gray-500 text-lg ">
            <th className="pt-3 pb-1 text-left font-normal">Course Name</th>
            <th className="pt-3 pb-1 text-left font-normal">Lessons</th>
            <th className="pt-3 pb-1 text-left font-normal">Status</th>
            <th className="pt-3 pb-1 text-left font-normal">Level</th>
            <th className="pt-3 pb-1 text-left font-normal">Category</th>
          </tr>
        </thead>
        <tbody className="text-[#444F50] text-[18px] font-medium ">
          <tr className=" hover:bg-gray-100">
            <td className="flex items-center py-2 pt-6 text-left ">
              <div className="h-14 w-14 mr-3 bg-violet-300 rounded-xl"></div>
              Mastering Design System
            </td>
            <td className="py-3 text-left">15<span className="font-light text-[#8F9197]">/15</span></td>
            <td className="py-3 text-left text-[#4EA661] font-bold text-xs"><span className="bg-[#E3EEE8] px-2 py-1 rounded-3xl">Compelete</span></td>
            <td className="py-3 text-left">Intermediate</td>
            <td className="py-3 text-left">Design</td>
          </tr>
          <tr className=" hover:bg-gray-100">
            <td className="py-2 text-left flex items-center">
              <div className="h-14 w-14 mr-3 bg-violet-300 rounded-xl"></div>
              UI/UX Design
            </td>
            <td className="py-3 text-left">12<span className="font-light text-[#8F9197]">/15</span></td>
            <td className="py-3 text-left text-[#1F6AEA] font-bold text-xs"><span className="bg-[#DFE9F8] px-2 py-1 rounded-3xl">Ongoing</span></td>
            <td className="py-3 text-left">Beginer</td>
            <td className="py-3 text-left">Design</td>
          </tr>
          <tr className=" hover:bg-gray-100">
            <td className="py-2 text-left flex items-center">
              <div className="h-14 w-14 mr-3 bg-violet-300 rounded-xl"></div>
              Learn Data Analyst
            </td>
            <td className="py-3 text-left">8<span className="font-light text-[#8F9197]">/20</span></td>
            <td className="py-3 text-left text-[#1F6AEA] font-bold text-xs"><span className="bg-[#DFE9F8] px-2 py-1 rounded-3xl">Ongoing</span></td>
            <td className="py-3 text-left">Expert</td>
            <td className="py-3 text-left">Data</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CourseTable