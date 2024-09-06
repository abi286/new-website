import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Design (40%)', 'Code (30%)', 'Business (20%)', 'Data (10%)'],
  datasets: [
    {
      data: [40, 20, 10, 30], // Corresponding data percentages
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
      position: 'bottom', // Legend positioned at the bottom
      labels: {
        padding: 20, // Controls the space between chart and legend
        font: {
          size: 14, // Size of the legend labels
        },
      },
    },
    tooltip: {
      enabled: true, // Enables tooltips on hover
      callbacks: {
        label: function (tooltipItem) {
          const label = tooltipItem.label || '';
          const value = tooltipItem.raw || 0;
          return `${label}: ${value}%`;
        },
      },
    },
  },
  cutout: '70%', // Controls the size of the inner cutout
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
        <div className="h-[475px]">
          <Doughnut data={data} options={options} />
          <div className="flex flex-col align-middle items-center -translate-y-[350px]">
            <h1 className="text-5xl font-semibold text-[#222F30]">42</h1>
            <p className="text-[#61656C]">Total Course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTopics;
