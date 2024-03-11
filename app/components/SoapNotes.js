//SOAP notes page. Able to add a new Notes and see old soap notes from client.id passed from Patients
"use client";

import { Card } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import MyModal from "./MyModal";

const SoapNotes = ( {onClose, client }) => {
    const [formData, setFormData] = useState({
        date: "",
        subjective: "",
        objective: "",
        assessment: "",
        plan: "",
    });


    const [allNotes, setAllNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
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
            const response = await fetch(`/api/soap/?firstName=${client.firstName}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                closeModal();
            } else {
                console.error("Error adding note: " + response.statusText);
            }
        } catch (error) {
            console.error("Error adding note: ", error);
        }
    };

    const openModal = () => {
        setFormData({
        date: "",
        subjective: "",
        objective: "",
        assessment: "",
        plan: "",
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    useEffect(() => {
        // Fetch data from the database and set it to allNotes
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/soap/?firstName=${client.firstName}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                
                });
                console.log(client.firstName);
                if (response.ok) {
                    const data = await response.json();
                    setAllNotes(data);
                } else {
                    console.error("Error fetching data: " + response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [client.firstName]);
    
    return (
        <Card className="bg-white rounded-md p-6 w-[500px] h-[700px] overflow-x-auto ">
        <div className="col-span-4 p-3 bg-white">
        <h2 className="text-black font-bold text-xl">
            SOAP Notes
        </h2>
        <div className="flex">
            <button
            onClick={openModal}
            className="bg-main text-white px-4 py-2 rounded-md mt-4"
            >
            Add Note
            </button>
        </div>
        <div className="mt-10">
            <h3 className="text-[#2D4635] font-bold text-lg">Previous Notes</h3>
            <div className="mt-4">
            {allNotes.map((note) => (
                <div key={note._id} className="border-b border-[#2D4635] pb-4">
                <p className="text-[#2D4635] font-bold">Date: {client.date}</p>
                <p className="text-[#2D4635]">Subjective: {note.subjective}</p>
                <p className="text-[#2D4635]">Objective: {note.objective}</p>
                <p className="text-[#2D4635]">Assessment: {note.assessment}</p>
                <p className="text-[#2D4635]">Plan: {note.plan}</p>
                </div>
            ))}
            </div>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black bg-opacity-40" onClick={closeModal} />
            <div className="bg-white p-8 rounded-md z-50">
                <h3 className="text-[#2D4635] font-bold text-lg mb-4">Add Note</h3>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border w-full p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                    id="subjective"
                    name="subjective"
                    value={formData.subjective}
                    onChange={handleChange}
                    placeholder="Subjective"
                    className="border w-full p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                    id="objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    placeholder="Objective"
                    className="border w-full p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                    id="assessment"
                    name="assessment"
                    value={formData.assessment}
                    onChange={handleChange}
                    placeholder="Assessment"
                    className="border w-full p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    placeholder="Plan"
                    className="border w-full p-2 rounded"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="bg-[#2D4635] text-white px-4 py-2 rounded-md"
                    >
                    Add Note
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
        </Card>
    );
}

export default SoapNotes;
