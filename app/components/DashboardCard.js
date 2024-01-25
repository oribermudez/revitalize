"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function DashboardCard({ cardData }) {
  return (
    <>
      {cardData && (
        <Card
          variant="gradient"
          className="w-full  bg-green-200 max-w-[20rem] p-8 rounded-full  flex items-center">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center">
            <Typography
              variant="small"
              color="black"
              className="font-normal uppercase">
              {cardData.title}
            </Typography>
            <Typography
              variant="h1"
              color="black"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal">
              <span className="mt-2 text-4xl"></span>
              {cardData.value}{" "}
              <span className="self-end text-4xl">{cardData.unit}</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0"></CardBody>
          <CardFooter className="mt-5 p-0">
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
