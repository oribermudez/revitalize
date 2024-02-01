"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import * as Heroicons from "@heroicons/react/24/outline";
import Chart from "chart.js/auto";

export function DashboardCard() {
  // Map the titles to corresponding Heroicons
  const iconMapping = {
    Cancellations: Heroicons.ArchiveBoxXMarkIcon,
    Appointments: Heroicons.CalendarIcon,
    Patients: Heroicons.UserGroupIcon,
  };

  const cardData = [
    { title: "Visits Today", value: 5 },
    { title: "Total Appointments", value: 45 },
    { title: "Cancellations", value: 50 },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {cardData.map((item, index) => {
          const IconComponent = iconMapping[item.title];

          // Doughnut chart data for each card
          const doughnutChartData = {
            labels: [item.title],
            datasets: [
              {
                data: [item.value, 100 - item.value],
                backgroundColor: ["white", "#2D4635"],
                borderColor: ["#3D45", "black"],
                radius: 40,
                cutout: 40,
                clip: { left: 5, top: false, right: -2, bottom: 0 },
              },
            ],
          };

          // Chart configurations for each card
          const doughnutChartConfig = {
            type: "doughnut",
            data: doughnutChartData,
          };

          // Create a unique ref for each chart
          const doughnutChartRef = useRef(null);

          useEffect(() => {
            const doughnutChart = new Chart(
              doughnutChartRef.current,
              doughnutChartConfig
            );

            return () => {
              doughnutChart.destroy();
            };
          }, [doughnutChartConfig]);

          return (
            <Card
              key={index}
              variant="gradient"
              className="md:w-1/2 lg:w-1/3 xl:w-1/4 m-4 max-w-[20rem] bg-white border-2 border-green-200 p-8 rounded-3xl  flex items-center"
              style={{ height: "200px", width: "350px" }}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 text-center flex flex-row">
                {IconComponent && (
                  <IconComponent className="h-4 w-4 mr-2 text-green-500" />
                )}
                <Typography
                  variant="small"
                  color="black"
                  className="font-normal uppercase">
                  {item.title}
                </Typography>
              </CardHeader>
              <CardBody className="flex justify-between p-0 text-left">
                <Typography
                  variant="h1"
                  color="black"
                  className=" flex justify-center gap-1 text-3xl font-normal">
                  {item.value}
                </Typography>
                <canvas ref={doughnutChartRef} className="w-5 h-5" />
              </CardBody>
              <CardFooter className=" p-0">
                <Button
                  size="lg"
                  className="underline underline-offset-1 text-gray-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-50"
                  ripple={true}>
                  Details
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
