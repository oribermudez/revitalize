"use client";

import React from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PatientsVisitsChart = () => {
  const data = {
    series: [
      {
        name: "Number of Patients",
        data: [10, 50, 30, 90, 40, 120, 100, 50, 80, 20, 60, 40],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#52ccb2"],
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
        categories: [
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
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
      title: {
        text: "Patients Visits",
        align: "center",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
    },
  };
  return (
    <div>
      <Chart
        height={420}
        width={700}
        options={data.options}
        series={data.series}
        type="area"
        className="w-full rounded-md px-6 py-3 shadow-2xl"
      />
    </div>
  );
};

export default PatientsVisitsChart;
