import CourseTable from "./CourseTable"

const MyCourse = () => {
  return (
    <div className="bg-zinc-100 w-full h-96 max-h-screen">
        <h1 className="pt-11 ml-10 font-bold">My Course</h1>
        <CourseTable />
    </div>
  )
}

export default MyCourse