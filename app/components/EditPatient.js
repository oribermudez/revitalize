"use client";

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";

const EditPatient = ({ onClose, client }) => {
    const [formData, setFormData] = useState({
        firstName: client.firstName,
        lastName: client.lastName,
        address: client.address,
        email: client.email,
        phone: client.phone,
        personalNotes: client.personalNotes,
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
        const response = await fetch(`/api/clients/?id=${client._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error("Error updating client: ", error);
      }
      onClose();
    };

    const handleDelete = async (clientId) => {
      try {
        console.log(clientId);
  
        const confirmation = window.confirm(
          "Are you sure you want to delete this client?"
        );
  
        if (confirmation) {
          const response = await fetch(`/api/clients/?id=${clientId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
  
          alert(data.message);
          onClose();
        }
      } catch (error) {
        console.error("Error deleting client:", error);
      }
    };

  return (
    <Card className='bg-white rounded-md p-6'>
    <div>
      <form onSubmit={handleSubmit}>
      <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-10">
            Edit Patient
          </Typography>

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
            Update
          </Button>
          <Button
            onClick={() => handleDelete(client._id)}
            className="w-full bg-red-500 text-sm mt-20"
          >
            Delete Patient
          </Button>
        </CardFooter>
      </form>
    </div>
    </Card>
  );
};

export default EditPatient;