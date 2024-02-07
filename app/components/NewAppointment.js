"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppState } from "../global-state/AppStateContext";
import { ADD_APPOINTMENT, addAppointment } from "../global-state/actions";
import dayjs from "dayjs";

const services = [
  "Deep Tissue",
  "Hot Stone",
  "Relaxing",
  "Facial",
  "Aromatherapy",
];

const NewAppointment = ({ onClose }) => {
  const { dispatch } = useAppState();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: `appointment-${Math.floor(Math.random() * 1000)}`,
      img: "/assets/team-1.jpg",
      name: `${name} ${lastName}`,
      service: selectedService,
      active: true,
      date: dayjs(selectedDate).format("DD/MM/YY"),
      duration: selectedDuration,
      start: selectedDate,
      end: selectedDate,
    };

    dispatch(
      addAppointment({ type: ADD_APPOINTMENT, payload: newAppointment })
    );

    onClose();
  };

  return (
    <Card className="bg-white rounded-md p-6 ">
      <form onSubmit={handleSubmit}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-10">
            New Appointment
          </Typography>
          <div className="relative mb-6">
            <label
              htmlFor="name"
              className={`absolute left-2 ${
                name ? "text-gray-600 text-xs" : "text-gray-400 text-md"
              } transition-all pointer-events-none`}>
              First Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
              className={`w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-[#779790] bg-white focus:outline-none ${
                name && "pt-4"
              }`}
            />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="lastName"
              className={`absolute left-2 ${
                lastName ? "text-gray-600 text-xs" : "text-gray-400 text-md"
              } transition-all pointer-events-none`}>
              Last Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setLastName(e.target.value)}
              required
              className={`w-full px-2 py-1 border-b-2 text-gray-600 text-sm border-gray-300 focus:border-[#779790] bg-white focus:outline-none ${
                lastName && "pt-4"
              }`}
            />
          </div>
          <div className="mb-6">
            <DatePicker
              id="datePicker"
              placeholderText="Select a date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-[#779790]"
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>
          <div className="mb-6">
            <select
              id="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 border-b-2 focus:border-[#779790] outline-none"
              required>
              <option value="" disabled>
                Select Service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <select
              id="duration"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full p-2 border-b-2 focus:border-[#779790] outline-none"
              required>
              <option value="" disabled className="!text-grey-300">
                Select Duration
              </option>
              <option value="30">30 mins</option>
              <option value="60">60 mins</option>
              <option value="90">90 mins</option>
            </select>
          </div>
        </CardBody>
        <CardFooter>
          <Button type="submit" className="w-full bg-[#779790] text-sm mt-0">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default NewAppointment;
