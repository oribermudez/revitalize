"use client";

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";

const NewPatient = ({ onClose }) => {
  const [formData, setFormData] = useState({
    soapId: generateUniqueSoapId(),
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    personalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    onClose();
  };

  function generateUniqueSoapId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000); 
    return `${timestamp}-${random}`;
  }

  return (
    <Card className='bg-white rounded-md p-6'>
    <div>
      <form onSubmit={handleSubmit}>
      <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-10">
            Add New Patient
          </Typography>
        <div>
          <input
            type="hidden"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="personalNotes"
            name="personalNotes"
            placeholder="Notes"
            value={formData.personalNotes}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>
        </CardBody>
        <CardFooter>
          <Button type="submit" className="w-full bg-main text-sm mt-0">
            Submit
          </Button>
        </CardFooter>
      </form>
    </div>
    </Card>
  );
};

export default NewPatient;