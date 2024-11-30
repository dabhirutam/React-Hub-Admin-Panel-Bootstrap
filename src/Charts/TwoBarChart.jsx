import React from "react";
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
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Customize labels
    datasets: [
      {
        label: "MEMORY USAGE",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 75, 90, 45], // Replace with your data
        backgroundColor: "#ffffff25",
        color: "",
      },
      {
        label: "CPU USAGE",
        data: [45, 49, 60, 71, 46, 35, 30, 50, 40, 65, 80, 55], // Replace with your data
        backgroundColor: "#3cd2a5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff90", // Set legend labels color to white
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

  return <Bar data={data} options={options} />;
};

export default TwoBarChart;
