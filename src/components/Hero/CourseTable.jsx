
const CourseTable = () => {
  return (
    <div className="overflow-x-auto ml-10">
      <table className="min-w-full bg-transparent ">
        <thead>
          <tr className="bg-transparent border-b border-gray-200  text-gray-500 text-base ">
            <th className="pt-3 pb-1 text-left font-light">Course Name</th>
            <th className="pt-3 pb-1 text-left font-light">Lessons</th>
            <th className="pt-3 pb-1 text-left font-light">Status</th>
            <th className="pt-3 pb-1 text-left font-light">Level</th>
            <th className="pt-3 pb-1 text-left font-light">Category</th>
          </tr>
        </thead>
        <tbody className="text-black text-sm ">
          <tr className=" hover:bg-gray-100">
            <td className="flex items-center py-2 text-left ">
              <div className="h-10 w-10 mr-3 bg-violet-700 rounded-lg"></div>
              Mastering Design System
            </td>
            <td className="py-3 text-left"><span className="font-bold">15</span>/15</td>
            <td className="py-3 text-left text-[#4EA661] font-bold text-xs"><span className="bg-[#E3EEE8] px-2 py-1 rounded-3xl">Compelete</span></td>
            <td className="py-3 text-left">Intermediate</td>
            <td className="py-3 text-left">Design</td>
          </tr>
          <tr className=" hover:bg-gray-100">
            <td className="py-2 text-left flex items-center">
              <div className="h-10 w-10 mr-3 bg-violet-700 rounded-lg"></div>
              UI/UX Design
            </td>
            <td className="py-3 text-left"><span className="font-bold">15</span>/12</td>
            <td className="py-3 text-left text-[#1F6AEA] font-bold text-xs"><span className="bg-[#DFE9F8] px-2 py-1 rounded-3xl">Ongoing</span></td>
            <td className="py-3 text-left">Beginer</td>
            <td className="py-3 text-left">Design</td>
          </tr>
          <tr className=" hover:bg-gray-100">
            <td className="py-2 text-left flex items-center">
              <div className="h-10 w-10 mr-3 bg-violet-700 rounded-lg"></div>
              Learn Data Analyst
            </td>
            <td className="py-3 text-left"><span className="font-bold">8</span>/20</td>
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