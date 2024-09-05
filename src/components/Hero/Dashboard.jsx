import { BookText } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Medal } from "lucide-react";
import { Clock4 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-zinc-100 w-[1010px] h-80 ">
      <h1 className="pt-12 pl-10 font-semibold text-xl text-[#222F30]">Dashboard</h1>
      <div className="flex flex-row gap-3 mt-5">
        <div className=" ml-10 h-44 w-56 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex items-center gap-2 ml-6 mt-8 text-[#61656C]">
            <BookText
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#1f6aea] p-1 rounded"
            />
            <p>Ongoing</p>
          </div>
          <p className="ml-6 mt-6 font-semibold text-6xl text-[#222F30]">5</p>
        </div>
        <div className="gap-1 h-44 w-56 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex items-center gap-2 ml-6 mt-8 text-[#61656C]">
            <CircleCheck
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#4ea661] p-1 rounded"
            />
            <p>Compelete</p>
          </div>
          <p className="ml-6 mt-6 font-semibold text-6xl text-[#222F30]">37</p>
        </div>
        <div className=" h-44 w-56 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex items-center gap-2 ml-6 mt-8 text-[#61656C]">
            <Medal
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#F59158] p-1 rounded"
            />
            <p>Certificate</p>
          </div>
          <p className="ml-6 mt-6 font-semibold text-6xl text-[#222F30]">25</p>
        </div>
        <div className=" mr-5 h-44 w-56 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex items-center gap-2 ml-6 mt-8 text-[#61656C]">
            <Clock4
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#7455F7] p-1 rounded"
            />
            <p>Hour Spent</p>
          </div>
          <p className="ml-6 mt-6 font-semibold text-6xl text-[#222F30]">705</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
