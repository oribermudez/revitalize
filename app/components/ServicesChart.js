import Chart from "react-apexcharts";
import React from "react";

const ServicesChart = () => {
  const options = {
    plotOptions: {
      treemap: {
        distributed: true,
      },
    },
    chart: {
      height: 350,
      type: "treemap",
    },
  };

  const series = [
    {
      data: [
        {
          x: "Deep Tissue",
          y: 218,
        },
        {
          x: "Hot Stone",
          y: 149,
        },
        {
          x: "Facial Sculpting",
          y: 184,
        },
        {
          x: "Relaxing",
          y: 55,
        },
        {
          x: "Theraupetic",
          y: 84,
        },
        {
          x: "Scalp",
          y: 31,
        },
        {
          x: "Rejuvenate",
          y: 70,
        },
      ],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="treemap" />
    </div>
  );
};

export default ServicesChart;
