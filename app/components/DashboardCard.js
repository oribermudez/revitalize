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
      title: "Visits Today",
      value: 5,
      pathColor: "#6366f1",
      backgroundColor: "#fef3c7",
      icon: UilUsersAlt,
    },
    {
      title: "Total Appointments",
      value: 45,
      pathColor: "#f59e0b",
      backgroundColor: "#d9f99d",
      icon: UilFileCheckAlt,
    },
    {
      title: "Cancellations",
      value: 50,
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
              className="md:w-1/2 lg:w-1/3 xl:w-1/4 m-4 max-w-[20rem] border-green-200 p-8 rounded-3xl  flex items-center"
              style={{
                height: "200px",
                width: "350px",
                backgroundColor: item.backgroundColor,
              }}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 text-center flex flex-row ">
                <Typography
                  variant="h1"
                  color="white"
                  className="font-bold uppercase ">
                  {item.title}
                </Typography>
                <item.icon className="h-6 w-6 ml-2 " />
              </CardHeader>
              <CardBody className="flex justify-between p-0 text-left">
                <Typography
                  variant="h1"
                  color="black"
                  className=" flex justify-center gap-1 text-3xl font-normal">
                  {item.value}
                </Typography>
                <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbarWithChildren
                    value={item.value}
                    text={`${item.value}%`}
                    styles={buildStyles({
                      pathColor: item.pathColor,
                      backgroundColor: item.backgroundColor,
                    })}
                  />
                </div>
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
