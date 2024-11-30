import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {

    const data = {
        labels: Array.from({ length: 20 }, (_, i) => `Label ${i + 1}`), // Example: 20 bars
        datasets: [
            {
                label: "Data",
                data: [12, 19, 3, 5, 2, 3, 12, 19, 7, 15, 10, 13], // Example data
                backgroundColor: "#1abc9c", // Match teal color
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // Hide gridlines
                },
                ticks: {
                    display: false, // Hide X-axis labels
                },
            },
            y: {
                grid: {
                    display: false, // Hide gridlines
                },
                ticks: {
                    display: false, // Hide Y-axis labels
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export default BarChart;