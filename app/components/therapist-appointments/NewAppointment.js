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

const NewAppointment = ({ onClose }) => {
  const { dispatch } = useAppState();

  const [formData, setFormData] = useState({
    startTime: "",
    service: "",
    therapist: "65fcee40d176ae6318341362", //TODO: get this from the logged in user
    client: "",
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
              selected={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-slate-300 outline-none focus:border-main"
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
                  {service.length}min {service.name}
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
                  {therapist.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <select
              id="client"
              value={formData.client}
              onChange={handleChange}
              className="w-full p-2 border-b-2 focus:border-main outline-none"
              required
            >
              <option value="" disabled className="!text-grey-300">
                Select Client
              </option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.name}
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
