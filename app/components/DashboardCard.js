"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { UsersIcon } from "@heroicons/react/24/outline";

export function DashboardCard({ cardData }) {
  return (
    <>
      {cardData && (
        <Card
          variant="gradient"
          className=" w-full h-40 bg-white max-w-[20rem] border-4 border-green-200 p-8 rounded-3xl  flex items-center">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0  rounded-none border-b border-white/10 pb-1 text-center flex flex-row">
            <UsersIcon className="h-2 w-4 text-green-500" />
            <Typography
              variant="small"
              color="black"
              className="font-normal uppercase">
              {cardData.title}
            </Typography>
            <Typography
              variant="h1"
              color="black"
              className="p-2 flex justify-center gap-1 text-3xl font-normal">
              <span className="mt-2 text-2xl"></span>
              {cardData.value}{" "}
              <span className="self-end text-2xl">{cardData.unit}</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0"></CardBody>
          <CardFooter className=" p-0">
            <Button
              size="lg"
              className="underline underline-offset-1 text-gray-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-50"
              ripple={true}>
              Details
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
