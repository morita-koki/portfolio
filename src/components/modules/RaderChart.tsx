// "use client"

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);


export const RadarChart = ({ data, options }: { data: any, options: any }) => {
    return (
        <Radar data={data} options={options} />
    )
}

// export default RaderChart