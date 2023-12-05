"use client"

import React from "react";
import { useState } from "react";
import { useAppState } from '../global-state/AppStateContext';
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
import MyModal from "./MyModal";
import NewAppointment from "./NewAppointment";

const TABLE_HEAD = ["Client", "Service", "Status", "Date", ""];
 
const RecentAppointments = () => {
  const { state } = useAppState();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Card className="w-full rounded-md px-6 py-3">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Typography variant="h5" color="blue-gray">
                Appointments
              </Typography>
              <Typography color="gray" className="mt-1 font-normal text-gray-300">
                See information about all your appointments
              </Typography>
            </div>
            <div>
              <Button className="bg-[#779790] py-2 pr-6 pl-4 text-sm flex items-center" onClick={openModal}>
                <PlusIcon className="h-4 w-4 mr-2" />
                New Appointment
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 h-96 pt-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 text-sm"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {state?.appointments?.length && state.appointments.map(
                ({ img, name, service, duration, active, date }, index) => {
                  const isLast = index === state.appointments.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="xs" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {service}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {duration} mins
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className={`w-max text-[10px] font-bold px-2 py-1 rounded-md ${active ? "text-green-700 bg-green-700/20" : "text-red-700 bg-red-700/20"}`}>
                          {active ? "ACCEPTED" : "CANCELLED"}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User" className="py-2 px-3">
                          <IconButton variant="text" className="flex items-center">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" className="py-2 px-5 border-2 border-gray-300">
              PREVIOUS
            </Button>
            <Button variant="outlined" size="sm" className="py-2 px-5 border-2 border-gray-300">
              NEXT
            </Button>
          </div>
        </CardFooter>
      </Card>
      <MyModal isOpen={isOpen} onClose={closeModal}>
        <NewAppointment onClose={closeModal} />
      </MyModal>
    </>
  );
}

export default RecentAppointments;