import React, { useState } from "react";
import { useAppState } from "../global-state/AppStateContext";
import {
  CheckCircleIcon,
  PencilIcon,
  PlusIcon,
  XCircleIcon,
  PlusCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
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

const TABLE_HEAD = ["Name", "Service", "Status", "Date", "Time", ""];

const RecentAppointments = () => {
  const { state } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleRows, setVisibleRows] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSeeMoreClick = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 5);
    setIsExpanded(true);
  };

  const handleCollapseClick = () => {
    setVisibleRows(5); // Reset visibleRows to initial value
    setIsExpanded(false);
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
              <Typography color="gray" className="mt-1 font-normal text-slate-300">
                See information about all your appointments
              </Typography>
            </div>
            <div>
              <Button className="bg-main py-2 pr-6 pl-4 text-sm flex items-center" onClick={openModal}>
                <PlusIcon className="h-4 w-4 mr-2" />
                New Appointment
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll overflow-x-hidden px-0 h-96 pt-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-slate-100 bg-blue-slate-50/50 p-4 text-sm"
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
                    : "p-4 border-b border-blue-slate-50";
  
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="xs" />
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray">
                              {name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray">
                            {service}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="opacity-70">
                            {duration} mins
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className={` px-2 py-1  `}>
                          {active ? (
                            <CheckCircleIcon className="h-6 w-6 flex items-center fill-green-200" />
                          ) : (
                            <XCircleIcon className="h-6 w-6 flex items-center fill-red-300" />
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" color="blue-gray">
                          {date}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" color="blue-gray">
                          {time}
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-slate-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" className="py-2 px-5 border-2 border-slate-300">
              PREVIOUS
            </Button>
            <Button variant="outlined" size="sm" className="py-2 px-5 border-2 border-slate-300">
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
};

export default RecentAppointments;
