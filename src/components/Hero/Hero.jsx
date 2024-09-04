import ContinueLearning from "./ContinueLearning";
import CourseTopics from "./CourseTopics";
import Dashboard from "./Dashboard";
import MyCourse from "./MyCourse";
import PopularCourse from "./PopularCourse";

const Hero = () => {
  return (
    <div className="flex flex-row">
        <div>
        <Dashboard />
        <PopularCourse />
        <MyCourse />
        </div>
        <div>
        <CourseTopics />
        <ContinueLearning />
        </div>
    </div>
  )
}

export default Hero