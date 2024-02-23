"use client";

import React, { useState } from "react";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    soapNotes: "",
    personalNotes: "",
  });

  const collection = "clients";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //TODO: form validation checks

    try {
      const response = await fetch(`/api/${collection}`, {
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
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Client Information</h2>

        <div className="mb-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="firstName"
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
            placeholder="lastName"
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
            placeholder="address"
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
            placeholder="email"
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
            placeholder="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="soapNotes"
            name="soapNotes"
            placeholder="soapNotes"
            value={formData.soapNotes}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="personalNotes"
            name="personalNotes"
            placeholder="personalNotes"
            value={formData.personalNotes}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
