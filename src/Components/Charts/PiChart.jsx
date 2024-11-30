import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PiChart = () => {
    const data = {
        datasets: [
            {
                data: [70, 80, 77],
                backgroundColor: ["#3cd2a5", "#30a78a", "#2c8673"],
                borderWidth: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Pie data={data} options={options} style={{ width: "100%", height: "100%" }} />;
};

export default PiChart;
