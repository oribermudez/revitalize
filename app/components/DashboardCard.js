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
      pathColor: "#ffff",
      backgroundColor: "bg-teal-700",
      icon: UsersIcon,
    },
    {
      title: "Total Appointments",
      value: 45,
      monthlyGoal: 100,
      pathColor: "#ffff",
      backgroundColor: "bg-cyan-400",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Cancellations",
      value: 3,
      monthlyGoal: 10,
      pathColor: "#ffff",
      backgroundColor: "bg-emerald-200",
      icon: ArchiveBoxXMarkIcon,
    },
    {
      title: "Sales",
      value: 3,
      monthlyGoal: 10,
      pathColor: "#ffff",
      backgroundColor: "bg-lime-400",
      icon: BanknotesIcon,
    },
  ];

  return (
    <>
      <div className="flex flex-grow justify-between ">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 max-w-[20rem]">
            <Card
              variant="gradient"
              className={`p-4 max-w-full shadow-2xl rounded-2xl ${item.backgroundColor} `}
              style={{ height: "200px" }}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="mt-5  text-center flex justify-end items-end ">
                <item.icon className="h-6 w-6 mr-2 text-white " />
              </CardHeader>
              <CardBody className="flex justify-between p-0">
                <div style={{ width: 90, height: 90 }}>
                  <CircularProgressbarWithChildren
                    value={item.value}
                    text={`${item.monthlyGoal}%`}
                    styles={buildStyles({
                      pathColor: item.pathColor,
                      textColor: "#fff",
                    })}
                  />
                </div>
                <Typography
                  variant="h1"
                  color="black"
                  className=" gap-1 text-3xl m-5 font-bold text-white ">
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
          </div>
        ))}
      </div>
    </>
  );
}
