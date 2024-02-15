import Chart from "react-apexcharts";
import React from "react";

const ServicesChart = () => {
  const options = {
    plotOptions: {
      pie: {
        customScale: 1,
      },
    },
    legend: {
      fontSize: "16px",
      position: "bottom",

      horizontalAlign: "center",
      floating: false,
    },

    chart: {
      type: "donut",
    },
    labels: ["Therapeutic", "Relaxing", "Scalp", "Rejuvenating", "Deep Tissue"],
    series: [44, 55, 41, 17, 15],
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="donut"
      className="w-full rounded-md px-6 py-3 shadow-2xl"
    />
  );
};

export default ServicesChart;
