import { BookText } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Medal } from "lucide-react";
import { Clock4 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-zinc-100 w-full h-48">
      <h1 className="mt-12 ml-10 font-bold">Dashboard</h1>
      <div className="flex flex-row gap-4 mt-5">
        <div className=" ml-10 h-28 w-36 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex gap-1 ml-4 mt-5">
            <BookText
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#1f6aea] p-1 rounded"
            />
            <p className="text-sm">Ongoing</p>
          </div>
          <p className="ml-4 mt-3 font-semibold text-3xl">5</p>
        </div>
        <div className="gap-1 h-28 w-36 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex gap-1 ml-4 mt-5">
            <CircleCheck
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#4ea661] p-1 rounded"
            />
            <p className=" text-sm">Compelete</p>
          </div>
          <p className="ml-4 mt-3 font-semibold text-3xl">37</p>
        </div>
        <div className=" h-28 w-36 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex gap-1 ml-4 mt-5">
            <Medal
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#F59158] p-1 rounded"
            />
            <p className=" text-sm">Certificate</p>
          </div>
          <p className="ml-4 mt-3 font-semibold text-3xl">25</p>
        </div>
        <div className=" mr-5 h-28 w-36 bg-white border-spacing-2 border rounded-lg border-gray-300">
          <div className=" flex gap-1 ml-4 mt-5">
            <Clock4
              color="#ffffff"
              absoluteStrokeWidth
              className="bg-[#7455F7] p-1 rounded"
            />
            <p className=" text-sm">Hour Spent</p>
          </div>
          <p className="ml-4 mt-3 font-semibold text-3xl">705</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
