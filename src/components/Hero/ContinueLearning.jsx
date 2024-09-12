import { Circle } from "rc-progress";

const ContinueLearning = () => {
  return (
    <div className="bg-[#F7F8FA] w-full h-[455px] pr-10">
      <h1 className="pl-10 font-semibold text-xl text-[rgb(34,47,48)]">
        Continue Learning
      </h1>
      <div className="h-96 flex flex-col mt-3 gap-5">
        <div className="bg-white h-[105px] w-[445px] rounded-2xl ml-10 mt-5 mr-10 shadow-xl shadow-gray-200 flex items-center">
          <div className="flex flex-row items-center">
          <img src="src/assets/course4.jpeg" alt="" className="h-16 w-16 ml-4 mr-3 bg-pink-200 rounded-lg"/>
            <div>
              <p className="text-xs font-semibold text-[#7455F7] ml-2 ">
                DESIGN
              </p>
              <h3 className="text-base font-semibold text-[#222F30] ml-2 ">
                UI/UX Design
              </h3>
              <p className="text-xs ml-2 mt-2  text-[#61656C]">12/16 Lessons</p>
            </div>
            <div className="w-12 h-12 ml-40 text-lg">
              <Circle 
              percent={75}
              strokeColor="#7455F7"
              strokeWidth={12}
              trailColor="#D9D9D9"
              trailWidth={12}
              strokeLinecap="round"
              gapDegree={0}
              />
              <div className="-translate-y-[33px] translate-x-[10px] text-xs text-[#333] font-semibold">
                75%
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-[105px] w-[445px] rounded-2xl ml-10 mr-10 shadow-xl shadow-gray-200 flex items-center">
          <div className="flex flex-row items-center">
          <img src="src/assets/course5.jpeg" alt="" className="h-16 w-16 ml-4 mr-3 bg-pink-200 rounded-lg "/>
            <div>
              <p className="text-xs font-semibold text-[#7455F7] ml-2 ">CODE</p>
              <h3 className="text-base font-semibold text-[#222F30] ml-2 ">
                Cyber Security
              </h3>
              <p className="text-xs ml-2 mt-2  text-[#61656C]">20/30 Lessons</p>
            </div>
            <div className="w-12 h-12 ml-36 text-lg">
            <Circle 
              percent={60}
              strokeColor="#7455F7"
              strokeWidth={12}
              trailColor="#D9D9D9"
              trailWidth={12}
              strokeLinecap="round"
              />
              <div className="-translate-y-[33px] translate-x-[10px] text-xs text-[#333] font-semibold">
                60%
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-[105px] w-[445px] rounded-2xl ml-10 mr-10 shadow-xl shadow-gray-200 flex items-center">
          <div className="flex flex-row items-center">
            <img src="src/assets/course7.jpeg" alt="" className="h-16 w-16 ml-4 mr-3 bg-pink-200 rounded-lg"/>
            <div>
              <p className="text-xs font-semibold text-[#7455F7] ml-2 ">DATA</p>
              <h3 className="text-base font-semibold text-[#222F30] ml-2 ">
                Learn Data Analyst
              </h3>
              <p className="text-xs ml-2 mt-2  text-[#61656C]">8/20 Lessons</p>
            </div>
            <div className="w-12 h-12 ml-28 text-lg">
            <Circle 
              percent={40}
              strokeColor="#7455F7"
              strokeWidth={12}
              trailColor="#D9D9D9"
              trailWidth={12}
              strokeLinecap="round"
              />
              <div className="-translate-y-[33px] translate-x-[10px] text-xs text-[#333] font-semibold">
                40%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;
