import { Bar } from "react-chartjs-2";
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
        labels: Array.from({ length: 13 }, (_, i) => `Label ${i + 1}`), // Example: 13 bars
        datasets: [
            {
                label: "Data",
                data: [69, 34, 70, 73, 41, 32, 73, 72, 89, 57, 42, 86, 78], // Example data
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

    return <Bar style={{ width: "100%", height: "100%" }} data={data} options={options} />;
}

export default BarChart;