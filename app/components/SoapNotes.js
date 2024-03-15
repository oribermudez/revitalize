"use client";

import { Card } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

const SoapNotes = ( {onClose, client }) => {
    const [formData, setFormData] = useState({
        firstName: client.firstName,
        lastName: client.lastName,
        date: "",
        subjective: "",
        objective: "",
        assessment: "",
        plan: "",
        soapId: client.soapId,
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
            const dataToSend = { firstName: client.firstName, lastName: client.lastName, soapId: client.soapId, ...formData };
            const response = await fetch("/api/soap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                closeModal(); 
                fetchData();
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
    

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/soap/?soapId=${client.soapId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(client.soapId);
            if (response.ok) {
                const data = await response.json();
                data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAllNotes(data);
            } else {
                console.error("Error fetching data: " + response.statusText);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    },);

    return (
        <Card className="bg-white rounded-md p-6 w-[1300px] h-[900px] overflow-x-auto ">
        <div className="col-span-4 p-3 bg-white">
        <h2 className="text-black font-bold text-xl">
            SOAP Notes
        </h2>
        <div className="flex border-b border-[#2D4635] pb-4">
            <button
            onClick={openModal}
            className="bg-main text-white px-4 py-2 rounded-md mt-4 "
            >
            Add Note
            </button>
        </div>
        <div className="mt-10">
                    {allNotes.length === 0 ? (
                        <p className="mt-10 font-medium text-lightgrey font">No SOAP notes available</p>
                    ) : (
            <div className="">
                {allNotes.map((note) => {
                const formattedDate = new Date(note.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                });

                return (
                    <div key={note._id} className="border-b border-[#2D4635] pb-10">
                        <p className="text-[#2D4635] font-extrabold text-lg mt-10">Date: {formattedDate}</p>
                        <p className="text-[#2D4635] font-bold pt-3 pb-1">Subjective</p>
                        <p className="text-[#2D4635] border-2 border-lightgrey rounded-md px-4 py-2 pr-10" style={{ wordWrap: 'break-word' }}>{note.subjective}</p>
                        <p className="text-[#2D4635] font-bold pt-3 pb-1">Objective</p>
                        <p className="text-[#2D4635] border-2 border-lightgrey rounded-md px-4 py-2 pr-10" style={{ wordWrap: 'break-word' }}>{note.objective}</p>
                        <p className="text-[#2D4635] font-bold pt-3 pb-1">Assessment</p>
                        <p className="text-[#2D4635] border-2 border-lightgrey rounded-md px-4 py-2 pr-10" style={{ wordWrap: 'break-word' }}>{note.assessment}</p>
                        <p className="text-[#2D4635] font-bold pt-3 pb-1">Plan</p>
                        <p className="text-[#2D4635] border-2 border-lightgrey rounded-md px-4 py-2 pr-10" style={{ wordWrap: 'break-word' }}>{note.plan}</p>

                    </div>
                    );
                })}
            </div>
        )}
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
};


export default SoapNotes;
