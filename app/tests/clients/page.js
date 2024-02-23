"use client";

import React, { useState } from "react";

const ClientSearch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [searchResults, setSearchResults] = useState(null);

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
      const response = await fetch(
        `/api/clients?firstName=${formData.firstName}&lastName=${formData.lastName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error("Error fetching data: " + response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (clientId) => {
    try {
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
      }
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleEdit = async (client) => {
    try {
      const response = await fetch(`/api/clients/?id=${client._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // TODO: Update the client data in a form instead of hardcoding
          firstName: "New First Name",
          lastName: "New Last Name",
          address: "New Address",
          email: "New Email",
          phone: "New Phone",
          password: "New Password",
          soapNotes: {
            "Subjective Notes": "New Subjective Notes",
            "Objective Notes": "New Objective Notes",
            "Assessment Notes": "New Assessment Notes",
            "Plan Notes": "New Plan Notes",
          },
          personalNotes: "New Personal Notes",
        }),
      });

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error("Error updating client: ", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Search for a Client</h2>

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

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
      {searchResults && (
        <div className="mt-4 bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-4">Search Results</h3>
          <div className="grid grid-cols-1 gap-4">
            {searchResults.map((client) => (
              <div key={client._id} className="bg-blue-400 p-4 rounded">
                <p className="text-xl font-semibold">
                  {client.firstName} {client.lastName}
                </p>
                <p>
                  <strong>Address:</strong> {client.address}
                </p>
                <p>
                  <strong>Email:</strong> {client.email}
                </p>
                <p>
                  <strong>Phone:</strong> {client.phone}
                </p>
                <div>
                  {Object.keys(client.soapNotes).length === 0 ? (
                    <p>
                      <strong>SOAP Notes:</strong> None
                    </p>
                  ) : (
                    <ul className="ml-4">
                      {client.soapNotes["Subjective Notes"] && (
                        <li>
                          <strong>Subjective Notes:</strong>{" "}
                          {client.soapNotes["Subjective Notes"]}
                        </li>
                      )}
                      {client.soapNotes["Objective Notes"] && (
                        <li>
                          <strong>Objective Notes:</strong>{" "}
                          {client.soapNotes["Objective Notes"]}
                        </li>
                      )}
                      {client.soapNotes["Assessment Notes"] && (
                        <li>
                          <strong>Assessment Notes:</strong>{" "}
                          {client.soapNotes["Assessment Notes"]}
                        </li>
                      )}
                      {client.soapNotes["Plan Notes"] && (
                        <li>
                          <strong>Plan Notes:</strong>{" "}
                          {client.soapNotes["Plan Notes"]}
                        </li>
                      )}
                    </ul>
                  )}
                </div>
                <div>
                  {Object.keys(client.soapNotes).length === 0 ? (
                    <p>
                      <strong>Personal Notes:</strong> None
                    </p>
                  ) : (
                    <p>
                      <strong>Personal Notes:</strong> {client.personalNotes}
                    </p>
                  )}
                </div>
                <div className="flex mt-2">
                  <button
                    onClick={() => handleEdit(client)}
                    className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(client._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSearch;
