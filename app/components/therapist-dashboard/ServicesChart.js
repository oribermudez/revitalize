"use client";

import React from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ServicesChart = () => {
  const options = {
    width: "100%",
    chart: {
      height: "auto",
      type: "radialBar",
    },
    colors: ["#775DD0", "#00C8E1", "#FFB900"],

    series: [71, 63, 77],
    labels: ["Relaxing", "Therapeutic", "Scalp"],
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        offsetY: 70,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      containerMargin: {
        right: 0,
      },
    },
    title: {
      text: "Services",
      align: "center",
      margin: 20,
      offsetX: 0,
      offsetY: 0,
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: 400,
            width: "100%",
          },
        },
      },
    ],
  };

  return (
    <Chart
      height={400}
      width="100%"
      options={options}
      series={options.series}
      type="radialBar"
      className="w-full rounded-md px-6 py-3 shadow-2xl"
    />
  );
};

export default ServicesChart;
