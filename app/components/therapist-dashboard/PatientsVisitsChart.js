"use client";

import { React, useState, useEffect } from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PatientsVisitsChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Number of Appointments",
        data: [],
      },
    ],
    options: {
      width: "100%",
      chart: {
        height: "400px",
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
        margin: 20,
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
    },
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  async function fetchAppointments() {
    try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      const response = await fetch("/api/appointments");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const appointments = await response.json();

      const filteredAppointments = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.startTime);
        return appointmentDate.getFullYear() === currentYear;
      });

      const appointmentsByMonth = Array.from({ length: 12 }, () => 0); // Initialize an array to hold patient counts for each month

      filteredAppointments.forEach((appointment) => {
        const appointmentDate = new Date(appointment.startTime);
        const month = appointmentDate.getMonth();
        appointmentsByMonth[month]++;
      });

      setChartData((prevData) => ({
        ...prevData,
        series: [{ ...prevData.series[0], data: appointmentsByMonth }],
      }));
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  }

  return (
    <div className="!min-h-96">
      <Chart
        height="100%"
        width="100%"
        options={chartData.options}
        series={chartData.series}
        type="area"
        className="w-full rounded-md px-6 py-3 shadow-2xl"
      />
    </div>
  );
};

export default PatientsVisitsChart;
