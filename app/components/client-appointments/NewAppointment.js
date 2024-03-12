"use client";

import React, { useState, useEffect } from "react";
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
import "react-datepicker/dist/react-datepicker.css";
import { useAppState } from "@/app/global-state/AppStateContext";
import { ADD_APPOINTMENT, addAppointment } from "@/app/global-state/actions";

const NewAppointment = ({ onClose }) => {
  const { dispatch } = useAppState();

  const [formData, setFormData] = useState({
    startTime: "",
    service: "",
    therapist: "",
    client: "65d7c3486158325305bfbe33",
    status: "pending",
  });
  const [services, setServices] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`/api/services`)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
    fetch("/api/therapists")
      .then((response) => response.json())
      .then((data) => setTherapists(data))
      .catch((error) => console.error("Error fetching therapists:", error));
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting new appointment: ", formData);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error submitting new appointment form:", error);
    }
    dispatch(addAppointment({ type: ADD_APPOINTMENT, payload: formData }));

    onClose();
  };

  return (
    <Card className="bg-white rounded-md p-6">
      <form onSubmit={handleSubmit}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-10">
            New Appointment
          </Typography>
          <div className="mb-6">
            <input
              type="datetime-local"
              id="startTime"
              placeholderText="Select a date/time"
              selected={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-slate-300 outline-none focus:border-main"
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>
          <div className="mb-6">
            <select
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border-b-2 focus:border-main outline-none"
              required
            >
              <option value="" disabled>
                Select Service
              </option>
              {services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <select
              id="therapist"
              value={formData.therapist}
              onChange={handleChange}
              className="w-full p-2 border-b-2 focus:border-main outline-none"
              required
            >
              <option value="" disabled className="!text-grey-300">
                Select Therapist
              </option>
              {therapists.map((therapist) => (
                <option key={therapist._id} value={therapist._id}>
                  {therapist.firstName + " " + therapist.lastName}
                </option>
              ))}
            </select>
          </div>
        </CardBody>
        <CardFooter>
          <Button type="submit" className="w-full bg-main text-sm mt-0">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
export default NewAppointment;
