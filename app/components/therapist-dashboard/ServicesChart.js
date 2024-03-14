"use client";

import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ServicesChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      width: "100%",
      chart: {
        sparkline: {
          enabled: true,
        },
        height: "100%",
        type: "radialBar",
      },
      colors: ["#775DD0", "#00C8E1", "#FFB900"],
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
        position: "top",
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
              height: "400px",
              width: "100%",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const response = await fetch("/api/appointments");
      if (!response.ok) {
        throw new Error("Failed to fetch appointments data");
      }
      const appointments = await response.json();
      //console.log("appointments", appointments);

      //get the services ids from the appointments
      const servicesIds = appointments.map(
        (appointment) => appointment.service
      );

      //console.log("servicesIds", servicesIds);

      // Fetch all services
      const responseServices = await fetch("/api/services");
      if (!responseServices.ok) {
        throw new Error("Failed to fetch services data");
      }
      const services = await responseServices.json();

      //console.log("api services", services);

      // Count the number of appointments for each service
      const appointmentCounts = {};
      appointments.forEach((appointment) => {
        const serviceId = appointment.service;
        appointmentCounts[serviceId] = (appointmentCounts[serviceId] || 0) + 1;
      });

      // Calculate the total number of appointments
      const totalAppointments = appointments.length;

      // Calculate the percentage of appointments for each service and update series
      let series = services.map((service) => {
        const count = appointmentCounts[service._id] || 0;
        return {
          name: service.name,
          percentage: ((count / totalAppointments) * 100).toFixed(2),
        };
      });

      // Sort the series array by percentage in descending order
      series.sort((a, b) => b.percentage - a.percentage);

      // Get the top 3 services
      series = series.slice(0, 3);
      console.log("series", series);

      //get the names of the top 3 services
      const serviceNames = series.map((service) => service.name);
      console.log("serviceNames", serviceNames);

      // Get the percentages of the top 3 services
      const servicePercentages = series.map((service) => service.percentage);
      console.log("servicePercentages", servicePercentages);

      // Filter services that have IDs matching the ones from appointments
      // const matchingServices = services.filter((service) =>
      //   servicesIds.includes(service._id)
      // );

      // Get the names of matching services
      //const serviceNames = matchingServices.map((service) => service.name);

      setChartData((prevChartData) => ({
        ...prevChartData,
        series: servicePercentages,
        options: {
          ...prevChartData.options,
          labels: serviceNames,
        },
      }));
    } catch (error) {
      console.error("Error fetching services names:", error);
    }
  }

  return (
    <div className="h-96">
      <Chart
        height="100%"
        width="100%"
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        className="w-full rounded-md px-6 py-3 shadow-2xl"
      />
    </div>
  );
};

export default ServicesChart;
