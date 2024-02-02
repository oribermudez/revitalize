"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  UilFileCheckAlt,
  UilUsersAlt,
  UilTimesCircle,
} from "@iconscout/react-unicons";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function DashboardCard() {
  const cardData = [
    {
      title: "Visits",
      value: 2500,
      monthlyGoal: 10000,
      pathColor: "#6366f1",
      backgroundColor: "#fef3c7",
      icon: UilUsersAlt,
    },
    {
      title: "Total Appointments",
      value: 45,
      monthlyGoal: 100,
      pathColor: "#f59e0b",
      backgroundColor: "#d9f99d",
      icon: UilFileCheckAlt,
    },
    {
      title: "Cancellations",
      value: 3,
      monthlyGoal: 10,
      pathColor: "#3D45",
      backgroundColor: "#fbcfe8",
      icon: UilTimesCircle,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              variant="gradient"
              className="md:w-1/2 lg:w-1/3 xl:w-1/4 m-4 max-w-[20rem] border-green-200 p-8 rounded-3xl  flex"
              style={{
                height: "200px",
                width: "350px",
                backgroundColor: item.backgroundColor,
              }}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0  text-center flex justify-end items-end ">
                <item.icon className="h-6 w-6 mr-2 " />
              </CardHeader>
              <CardBody className="flex justify-between p-0">
                <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbarWithChildren
                    value={item.value}
                    text={`${Math.round(
                      ((item.monthlyGoal - item.value) / item.monthlyGoal) * 100
                    )}%`}
                    styles={buildStyles({
                      pathColor: item.pathColor,
                    })}
                  />
                </div>
                <Typography
                  variant="h1"
                  color="black"
                  className=" gap-1 text-3xl font-bold text-white ">
                  {item.value}
                </Typography>
              </CardBody>
              <CardFooter className=" p-0">
                <Button
                  size="lg"
                  className="hover:bg-gray-100 font-bold uppercase text-white shadow-transparent  w-50"
                  ripple={true}>
                  {item.title}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
