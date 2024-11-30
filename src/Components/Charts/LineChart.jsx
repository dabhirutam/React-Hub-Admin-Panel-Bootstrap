import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: Array.from({ length: 13 }, (_, i) => `Label ${i + 1}`), // Example: 13 line,
        datasets: [
            {
                label: "Data",
                data: [81, 89, 71, 75, 53, 47, 78, 33, 71, 81, 45, 43, 68],
                borderColor: "#1abc9c",
                borderWidth: 2,
                fill: false,
                tension: 0.3, // Controls smoothness; lower is straighter
                pointRadius: 0, // Hides data points
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false }, // Hides gridlines
                ticks: { display: false }, // Hides x-axis labels
            },
            y: {
                grid: { display: false }, // Hides gridlines
                ticks: { display: false }, // Hides y-axis labels
            },
        },
        plugins: {
            legend: { display: false }, // Hides the legend
        },
    };

    return  <Line data={data} options={options} style={{ width: "100%", height: "100%" }} />;
};

export default LineChart;
