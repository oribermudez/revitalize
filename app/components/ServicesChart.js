import Chart from "react-apexcharts";
import React from "react";

const ServicesChart = () => {
  const options = {
    width: "100%",
    chart: {
      height: 500,
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
    },
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="radialBar"
      className="w-full rounded-md px-6 py-3 shadow-2xl"
    />
  );
};

export default ServicesChart;
