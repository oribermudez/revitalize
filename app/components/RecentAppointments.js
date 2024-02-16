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
      <Card className="w-full rounded-md px-6 py-3 shadow-2xl">
        <CardHeader floated={true} shadow={false} className="rounded-none">
          <div className=" flex items-center justify-between ">
            <h1 className="text-gray-500 m-8 font-bold">Appointments</h1>
            <div className="flex items-center justify-end">
              <div className="py-2 pr-6 pl-4 text-sm" onClick={openModal}>
                <PlusCircleIcon className="h-8 w-8 hover:stroke-black stroke-white fill-[#779790]" />
              </div>
              <div>
                <PencilSquareIcon className="h-8 w-8 hover:stroke-black stroke-white fill-[#779790]" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-auto overflow-y-hidden scrollbar-hidden px-0 pt-0">
          <table className="w-full min-w-max table-auto text-left ">
            <thead>
              <tr className="">
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="text-gray-500 p-4 text-sm">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-8 divide-white">
              {state?.appointments
                ?.slice(0, visibleRows)
                ?.map(
                  ({ img, name, service, duration, active, date, time }) => (
                    <tr
                      key={name}
                      className="bg-gray-50 hover:bg-[#779790]/40 transition-colors duration-200">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Avatar
                            src={img}
                            alt={name}
                            size="xs"
                            className="rounded-full"
                          />
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
        <CardFooter className="flex items-center justify-center b p-4">
          {!isExpanded && visibleRows < state?.appointments?.length ? (
            <div
              className="text-[#779790] text-sm font-bold border-none hover:underline cursor-pointer"
              onClick={handleSeeMoreClick}>
              See More
            </div>
          ) : (
            <Button className="bg-[#779790]" onClick={handleCollapseClick}>
              Collapse
            </Button>
          )}
        </CardFooter>
      </Card>

      <MyModal isOpen={isOpen} onClose={closeModal}>
        <NewAppointment onClose={closeModal} />
      </MyModal>
    </>
  );
};

export default RecentAppointments;
