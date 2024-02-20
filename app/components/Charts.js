import React, { useEffect, useRef } from 'react';
import { Card } from '@material-tailwind/react';
import Chart from 'chart.js/auto';

const Charts = () => {
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartRef = useRef(null);

  const mainColor = '#009B94';
  const secondaryColor = '#A0ECD0';
  const highlightColor = '#9DAAFF';

  useEffect(() => {
    const lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Appointments',
          data: [10, 25, 27, 19, 24, 36],
          borderColor: secondaryColor,
          backgroundColor: mainColor,
        },
      ],
    };

    const doughnutChartData = {
      labels: ['Female', 'Male', 'Not Specified'],
      datasets: [
        {
          data: [87, 45, 20],
          backgroundColor: [secondaryColor, mainColor, highlightColor],
        },
      ],
    };

    const barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Cancellations',
          data: [5, 3, 2, 7, 4, 3],
          backgroundColor: highlightColor,
        },
      ],
    };

    // Chart configurations
    const lineChartConfig = {
      type: 'line',
      data: lineChartData,
      options: {
        scales: {
          x: {
            type: 'category',
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const doughnutChartConfig = {
      type: 'doughnut',
      data: doughnutChartData,
    };

    const barChartConfig = {
      type: 'bar',
      data: barChartData,
      options: {
        scales: {
          x: {
            type: 'category',
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const lineChart = new Chart(lineChartRef.current, lineChartConfig);

    const doughnutChart = new Chart(doughnutChartRef.current, doughnutChartConfig);

    const barChart = new Chart(barChartRef.current, barChartConfig);

    return () => {
      lineChart.destroy();
      doughnutChart.destroy();
      barChart.destroy();
    };
  }, []);

  return (
    <div className="py-6 flex flex-col md:flex-row gap-6 md:justify-between ">
      <Card className="w-full rounded-md">
        <div className="p-4">
          <h5 className="font-semibold text-lg text-slate-700 mb-4">Completed Appointments</h5>
          <canvas ref={lineChartRef} width="100" height="90"></canvas>
        </div>
      </Card>
      <Card className="w-full rounded-md">
        <div className="p-4">
          <h5 className="font-semibold text-lg text-slate-700 mb-4">Cancellations</h5>
          <canvas ref={barChartRef} width="100" height="90"></canvas>
        </div>
      </Card>
      <Card className="w-full rounded-md">
        <div className="p-4">
          <h5 className="font-semibold text-lg text-slate-700 mb-4">Total Patients: 132</h5>
          <canvas ref={doughnutChartRef} width="100" height="90"></canvas>
        </div>
      </Card>
    </div>
  );
};

export default Charts;
