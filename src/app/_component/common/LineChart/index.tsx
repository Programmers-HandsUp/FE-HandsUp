import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bids } from "@/app/types/product";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {},
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false
    }
  }
};

interface LineChartProps {
  bids: Bids;
}

const LineChart = ({ bids }: LineChartProps) => {
  const { content } = bids;

  const labels = content.map((item) =>
    new Date(item.createdAt).toLocaleDateString()
  );

  const data = {
    labels,
    datasets: [
      {
        label: "입찰금액",
        data: content.map((item) => item.biddingPrice),
        borderColor: "#96E4FF",
        backgroundColor: "#6569ff"
      }
    ]
  };
  return (
    <div>
      <div className="py-5">
        <h1>입찰 현황</h1>
      </div>
      <Line
        options={options}
        data={data}
      />
    </div>
  );
};

export default LineChart;
