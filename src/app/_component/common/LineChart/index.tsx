import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

import { BidResponse } from "@/utils/types/bid/bids";

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
  bids: BidResponse;
}

const LineChart = ({ bids }: LineChartProps) => {
  const { content } = bids;

  const labels = content
    .reverse()
    .map((item) => new Date(item.createdAt).toLocaleDateString());

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
      {content.length > 0 ? (
        <Line
          options={options}
          data={data}
        />
      ) : (
        <span className="text-gray-500 text-sm">입찰 내역이 안보이네요..</span>
      )}
    </div>
  );
};

export default LineChart;
