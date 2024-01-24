"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function DashboardCard() {
  return (
    <Card color="black" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center">
        <Typography
          variant="small"
          color="black"
          className="font-normal uppercase">
          Cancellations
        </Typography>
        <Typography
          variant="h1"
          color="black"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal">
          <span className="mt-2 text-4xl"></span>5{" "}
          <span className="self-end text-4xl">/week</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0"></CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}>
          View All
        </Button>
      </CardFooter>
    </Card>
  );
}
