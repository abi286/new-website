import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Design (40%)", "Code (30%)", "Business (20%)", "Data (10%)"],
  datasets: [
    {
      data: [40, 20, 10, 30],
      backgroundColor: [
        "rgba(116, 85, 247, 1)",
        "rgba(213, 204, 253, 1)",
        "rgba(184, 171, 251, 1)",
        "rgba(158, 136, 249, 1)",
      ],
      borderWidth: 0,
      hoverOffset: 10,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  cutout: "70%",
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

const CourseTopics = () => {
  return (
    <div className="bg-[#F7F8FA] w-full h-[610px] pt-5 pr-10">
      <h1 className="pl-10 pt-8 font-semibold text-xl text-[#222F30]">
        Course Topics
      </h1>
      <div className="bg-white h-[475px] w-[445px] rounded-2xl ml-10 mt-5 mr-10 flex items-center justify-center shadow-xl shadow-gray-200">
        <div>
          <div className="h-[300px]">
            <Doughnut data={data} options={options} />
            <div className="flex flex-col align-middle items-center -translate-y-[200px]">
              <h1 className="text-5xl font-semibold text-[#222F30]">42</h1>
              <p className="text-[#61656C]">Total Course</p>
            </div>
          </div>
          <div className="grid grid-cols-2  mt-8 ml-8 gap-4">
            {/* Design */}
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#7455F7] rounded mr-2"></span>
              <span className="text-gray-700 font-medium">
                Design <span className="font-bold">(40%)</span>
              </span>
            </div>
            {/* Code */}
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#9E88F9] rounded mr-2"></span>
              <span className="text-gray-700 font-medium">
                Code <span className="font-bold">(30%)</span>
              </span>
            </div>

            {/* Business */}
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#D5CCFD] rounded mr-2"></span>
              <span className="text-gray-700 font-medium">
                Business <span className="font-bold">(20%)</span>
              </span>
            </div>

            {/* Data */}
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#B8ABFB] rounded mr-2"></span>
              <span className="text-gray-700 font-medium">
                Data <span className="font-bold">(10%)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTopics;
