import React, { useState } from "react";
import { useAppState } from '../global-state/AppStateContext';
import { MagnifyingGlassIcon, PlusIcon  } from "@heroicons/react/24/outline";
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

const TABLE_HEAD = ["Name", "ID", "DOB", "Next Apt", ""];
const TABLE_ROWS = [
  {
    name: "John Doe",
    id: "123456789",
    dob: "01/01/1980",
    nextApt: "01/01/2022",
  },
  {
    name: "Jane Doe",
    id: "987654321",
    dob: "01/01/1980",
    nextApt: "01/01/2022",
  },
  {
    name: "John Smith",
    id: "123456789",
    dob: "01/01/1980",
    nextApt: "01/01/2022",
  },
  {
    name: "Jane Smith",
    id: "987654321",
    dob: "01/01/1980",
    nextApt: "01/01/2022",
  },
];

const MyPatients = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredRows = TABLE_ROWS.filter(({ name }) =>
    name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    
    <Card className="h-full w-full overflow-scroll mt-6">
      {/* Search bar */}
      <div className="flex justify-between p-4">
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search patients"
            className="border-2 border-lightgrey rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-accent transition duration-100 ease-in-out"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-3 h-5 w-5 text-blue-slate-500" />
        </div>
        <Button className="bg-main py-2 pr-6 pl-4 text-sm flex items-center">
                <PlusIcon className="h-4 w-4 mr-2" />
                New Patient
              </Button>
      </div>

      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-lightgrey bg-blue-slate-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(({ name, id, dob, nextApt }, index) => {
            const isLast = index === filteredRows.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-blue-slate-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dob}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nextApt}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default MyPatients;
