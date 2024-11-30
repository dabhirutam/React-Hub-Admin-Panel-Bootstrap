import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TwoBarChart = () => {
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => `Label ${i + 1}`), // Example: 24 line,
    datasets: [
      {
        label: "MEMORY USAGE",
        data: [67, 40, 48, 81, 72, 68, 44, 62, 41, 35, 58, 63, 52, 75, 84, 37, 53, 64, 67, 33, 40, 46, 84, 33], // Replace with your data
        backgroundColor: "#ffffff25",
      },
      {
        label: "CPU USAGE",
        data: [73, 40, 72, 69, 75, 54, 73, 89, 81, 50, 57, 41, 34, 52, 58, 88, 39, 42, 50, 52, 31, 85, 64, 53], // Replace with your data
        backgroundColor: "#30a78a",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#c5c7ca", // Set legend labels color to white
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false, // Optional: Adjust grid line color
        },
      },
      y: {
        ticks: {
          color: "white", // Set y-axis label color to white
        },
        grid: {
          color: '#ffffff30', // Optional: Adjust grid line color
        },
      },
    },
  };

  return <Bar data={data} options={options} style={{ width: "100%", height: "100%" }}  className="px-3" />;
};

export default TwoBarChart;
