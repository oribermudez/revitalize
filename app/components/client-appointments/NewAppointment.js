"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import "react-datepicker/dist/react-datepicker.css";

const NewAppointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    startTime: "",
    service: "",
    therapist: "",
    client: "65ff54ea5c64ef8e0707f900", //TODO: get client id from auth
    status: "pending",
  });
  const [services, setServices] = useState([]);
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetch(`/api/services`)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
    fetch("/api/therapists")
      .then((response) => response.json())
      .then((data) => setTherapists(data))
      .catch((error) => console.error("Error fetching therapists:", error));
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
      console.log("New appointment form submitted");
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
