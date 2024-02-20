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
  UsersIcon,
  ClipboardDocumentListIcon,
  XCircleIcon,
  ArchiveBoxXMarkIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

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

      backgroundColor: "bg-teal-700",
      icon: UsersIcon,
    },
    {
      title: "Total Appointments",
      value: 45,
      monthlyGoal: 100,

      backgroundColor: "bg-cyan-400",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Cancellations",
      value: 3,
      monthlyGoal: 10,

      backgroundColor: "bg-emerald-200",
      icon: ArchiveBoxXMarkIcon,
    },
    {
      title: "Sales",
      value: 3,
      monthlyGoal: 10,

      backgroundColor: "bg-lime-400",
      icon: BanknotesIcon,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-between ">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 xl:w-1/4 mb-8 max-w-[20rem]">
            <Card
              variant="gradient"
              className={`w-full lg:w-auto p-4 max-w-full shadow-2xl rounded-2xl ${item.backgroundColor} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
              style={{ height: "200px" }}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="mt-1  mr-3 text-center flex justify-end items-end ">
                <item.icon className="h-6 w-6 mr-2 text-white " />
              </CardHeader>
              <CardBody className="flex justify-between p-0">
                <div style={{ width: 116, height: 116 }}>
                  <CircularProgressbarWithChildren
                    value={item.value}
                    text={`${item.monthlyGoal}%`}
                    background
                    styles={buildStyles({
                      textColor: "#ffff",
                      pathTransitionDuration: 0.15,
                      trailColor: "#e4e4e7",
                      backgroundColor: "transparent",
                      pathColor: "#ffff",
                    })}
                    className="ml-6"
                  />
                </div>
                <Typography
                  variant="h1"
                  color="black"
                  className=" gap-1 text-4xl m-5 font-bold text-white ">
                  {item.value}
                </Typography>
              </CardBody>
              <CardFooter className="ml-8 p-0">
                <Button
                  size="lg"
                  className="hover:bg-gray-100 font-bold uppercase text-white shadow-transparent  w-50"
                  ripple={true}>
                  {item.title}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
