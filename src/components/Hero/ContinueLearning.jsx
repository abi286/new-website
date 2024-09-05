const ContinueLearning = () => {
  return (
    <div className="bg-zinc-100 ">
      <h1 className="pt-8 pl-10 font-bold">ContinueLearning</h1>
      <div className="h-96 flex flex-col gap-3">
        <div className="bg-white h-24 w-80 rounded-2xl ml-10 mt-5 mr-10 shadow-sm flex items-center">
          <div className="flex flex-row items-center">
            <div className="h-14 w-14 ml-4 mr-3 bg-violet-700 rounded-lg"></div>
            <div>
              <p className="text-sm font-semibold text-[#7455F7] ml-2 ">DESIGN</p>
              <h3 className="text-base font-semibold  ml-2 ">UI/UX Design</h3>
              <p className="text-xs ml-2 ">12/16 Lessons</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white h-24 w-80 rounded-2xl ml-10  mr-10 shadow-sm flex items-center">
        <div className="flex flex-row items-center">
            <div className="h-14 w-14 ml-4 mr-3 bg-violet-700 rounded-lg"></div>
            <div>
              <p className="text-sm font-semibold text-[#7455F7] ml-2 ">CODE</p>
              <h3 className="text-base font-semibold  ml-2 ">Cyber Security</h3>
              <p className="text-xs ml-2 ">20/30 Lessons</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-24 w-80 rounded-2xl ml-10  mr-10  shadow-sm flex items-center">
        <div className="flex flex-row items-center">
            <div className="h-14 w-14 ml-4 mr-3 bg-violet-700 rounded-lg"></div>
            <div>
              <p className="text-sm font-semibold text-[#7455F7] ml-2 ">DATA</p>
              <h3 className="text-base font-semibold  ml-2 ">Learn Data Analyst</h3>
              <p className="text-xs ml-2 ">8/20 Lessons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;
