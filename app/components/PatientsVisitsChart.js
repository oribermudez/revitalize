import Chart from "react-apexcharts";
import React from "react";

const PatientsVisitsChart = () => {
  const data = {
    series: [
      {
        name: "Number of Patients",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "numeric",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "month",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div>
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default PatientsVisitsChart;
