import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';

// Register the required components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'], // Labels for the segments
    datasets: [
      {
        data: [300, 50, 100, 75], // Data for each segment
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for each segment
        hoverBackgroundColor: ['#FF2A2A', '#006F9C', '#FFB81C', '#2CA9A9'], // Hover color
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: 'top', // Position the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;