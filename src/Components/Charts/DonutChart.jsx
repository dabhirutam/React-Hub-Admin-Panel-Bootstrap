import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

// eslint-disable-next-line react/prop-types
const DonutChart = ({segmentData}) => {  
  // Data for the donut chart
  const data = {
    labels: [], // Labels for the segments
    datasets: [
      {
        data: segmentData, // Data for each segment
        backgroundColor: ['#224449','#27645d', '#2c8673', '#30a78a', '#36c8a1'], // Colors for each segment
        borderWidth: 0,
      },
    ],
  };

  // Options for the donut chart
  const options = {
    responsive: true, // Make the chart responsive
    labels: {
      display: false, // Display labels
    },
    plugins: {
      legend: {
        position: 'top', // Position the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    cutout: '70%', // Make the chart a donut by setting cutout
  };

  return <Doughnut data={data} options={options} style={{ width: "100%", height: "100%" }} />;
};
export default DonutChart;
