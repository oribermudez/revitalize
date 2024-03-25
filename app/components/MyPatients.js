"use client";
import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon, PlusIcon, PencilSquareIcon, ChatBubbleBottomCenterTextIcon, UserIcon  } from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";
import NewPatient from "./NewPatient";
import MyModal from "./MyModal";
import EditPatient from "./EditPatient";
import SoapNotes from "./SoapNotes";
import PatientProfile from "./PatientProfile";

const TABLE_HEAD = ["First Name", "Last Name", "Email", "Phone Number", "SOAP", "Profile", "Edit"];


const MyPatients = () => {
  const [isNewPatientModalOpen, setNewPatientModalOpen] = useState(false);
  const [isEditPatientModalOpen, setEditPatientModalOpen] = useState(false);
  const [isSoapsModalOpen, setSoapsModalOpen] = useState(false);
  const [allClients, setAllClients] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [searchResults, setSearchResults] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfileClient, setSelectedProfileClient] = useState(null);

  const openNewPatientModal = () => {
    setNewPatientModalOpen(true);
  };

  const closeNewPatientModal = () => {
    setNewPatientModalOpen(false);
  };

  const openEditPatientModal = (client) => {
    setSelectedClient(client);
    setEditPatientModalOpen(true);
  };

  const closeEditPatientModal = () => {
    setSelectedClient(null);
    setEditPatientModalOpen(false);
  };

  const openSoapsModal = (client) => {
    setSelectedClient(client);
    setSoapsModalOpen(true);
  };

  const closeSoapsModal = () => {
    setSelectedClient(null);
    setSoapsModalOpen(false);
  };

  const redirectToProfile = (client) => {
    setSelectedProfileClient(client);
    setShowProfile(true);
  };

  useEffect(() => {
    // Fetch data from the database and set it to allClients
    const fetchData = async () => {
      try {
        const response = await fetch("/api/clients", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAllClients(data);
        } else {
          console.error("Error fetching data: " + response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
     }, []); 

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
      const response = await fetch(
        `/api/clients?firstName=${formData.firstName}`,
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

  return (
    <>
    {showProfile ? (
      <PatientProfile client={selectedProfileClient} setShowProfile={setShowProfile} />
    ) : (
    <Card className="h-full w-full mt-6 p-10">


    {/* Search bar */}
    <div className="flex justify-between pl-3 pr-5 pb-10">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Search patients"
            className="border-2 border-lightgrey rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-accent transition duration-100 ease-in-out"
          />
          <MagnifyingGlassIcon
            type="submit"
            className="absolute right-3 top-3 h-5 w-5 text-blue-slate-500"
          />
        </div>
      </form>

      {/* New Patient Button */}
      <Button
        onClick={openNewPatientModal}
        className="bg-main py-2 pr-6 pl-4 text-sm flex items-center"
      >
        <PlusIcon className="h-4 w-4 mr-2" />
        New Patient
      </Button>
    </div>
    <MyModal className='bg-opacity-80' isOpen={isNewPatientModalOpen} onClose={closeNewPatientModal}>
        <NewPatient onClose={closeNewPatientModal} />
      </MyModal>

    {/* Table */}
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

        {/* Show all clients */}
        <tbody className="">
          {searchResults === null
            ? allClients.map((client, index) => (
              <tr key={index}>
                <td className="p-5">{client.firstName}</td>
                <td className="p-5">{client.lastName}</td>
                <td className="p-5">{client.email}</td>
                <td className="p-5">{client.phone}</td>
                
                <td className="w-20">
                <Button
                    onClick={() => openSoapsModal(client)}
                    className="font-xl p-2.5 rounded-md justify-center text-center bg-main text-white px-6 mr-5"
                  >
                    <ChatBubbleBottomCenterTextIcon
                      className="h-5 w-5  font-bold "
                    />
                </Button>
                  <MyModal
                    isOpen={isSoapsModalOpen && selectedClient === client}
                    onClose={closeSoapsModal}
                  >
                    <SoapNotes
                      onClose={closeSoapsModal}
                      client={selectedClient}
                    />
                  </MyModal>
                </td> 
                
                {/* Redirect to patient profile */}
                <td className="w-20 pl-1">
                <Button
                    onClick={() => redirectToProfile(client)}
                    className="font-xl p-2.5 rounded-md justify-center text-center bg-main text-white px-6 mr-5"
                  >
                    <UserIcon
                      className="h-5 w-5 "
                    />
                </Button>
                </td>
                
                
                <td className="w-20 pr-5">
                <Button
                    onClick={() => openEditPatientModal(client)}
                    className="font-xl p-2.5 rounded-md justify-center text-center bg-main text-white px-6"
                  >
                    <PencilSquareIcon
                      className="h-5 w-5  font-bold "
                    />
                </Button>
                <MyModal
                    isOpen={isEditPatientModalOpen && selectedClient === client}
                    onClose={closeEditPatientModal}
                  >
                    <EditPatient
                      onClose={closeEditPatientModal}
                      client={selectedClient}
                    />
                  </MyModal>
                </td>
                </tr>
              ))

            : /* Show search results if available */
              searchResults.map((client) => (
                <tr key={client.id}>
                  <td className="p-5">{client.firstName}</td>
                  <td className="p-5">{client.lastName}</td>
                  <td className="p-5">{client.email}</td>
                  <td className="p-5">{client.phone}</td>
                  <td className="w-20">
                  <Button
                    onClick={() => openSoapsModal(client)}
                    className="font-xl p-2.5 rounded-md justify-center text-center bg-main text-white px-6 mr-5"
                  >
                    <PencilSquareIcon
                      className="h-4 w-4  font-bold "
                    />
                </Button>
                  <MyModal
                    isOpen={isSoapsModalOpen && selectedClient === client}
                    onClose={closeSoapsModal}
                  >
                    <SoapNotes
                      onClose={closeSoapsModal}
                      client={selectedClient}
                    />
                  </MyModal>
                  </td>
                <td className="w-20 pl-5">
                <Button
                    onClick={() => openEditPatientModal(client)}
                    className="font-xl p-2.5 rounded-md justify-center text-center bg-main text-white px-6"
                  >
                    <PencilSquareIcon
                      className="h-4 w-4  font-bold "
                    />
                </Button>
                <MyModal
                    isOpen={isEditPatientModalOpen && selectedClient === client}
                    onClose={closeEditPatientModal}
                  >
                    <EditPatient
                      onClose={closeEditPatientModal}
                      client={selectedClient}
                    />
                  </MyModal>
                </td>
                </tr>
              ))}
        </tbody>
      </table>
      </Card>
      )}
    </>
  );
};


export default MyPatients;