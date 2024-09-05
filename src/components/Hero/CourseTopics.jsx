
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Design (40%)', 'Code (30%)', 'Business (20%)', 'Data (10%)'],
  datasets: [
    {
      label: 'Topics',
      data: [40, 20, 10, 30],
      backgroundColor: ['rgba(116, 85, 247, 1)', 'rgba(213, 204, 253, 1)', 'rgba(184, 171, 251, 1)', 'rgba(158, 136, 249, 1)'],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

const CourseTopics = () => {
  return (
    <div className="bg-zinc-100 ">
      <h1 className="pt-12 pl-10 font-bold">Course Topics</h1>
      <div className="bg-white h-96 w-80 rounded-2xl ml-10 mt-5 mr-10 flex items-center justify-center shadow-sm">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default CourseTopics;
