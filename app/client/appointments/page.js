"use client";

import { useState, useEffect } from "react";
import { Card, Button } from "@material-tailwind/react";
import { AppStateProvider } from "../../global-state/AppStateContext";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import HighlightCards from "@/app/components/client-dashboard/HighlightCards";
import Appointment from "@/app/components/client-appointments/Appointment";
import MyCalendar from "@/app/components/MyCalendar";
import NewAppointment from "@/app/components/client-appointments/NewAppointment";
import MyModal from "@/app/components/MyModal";
import { PlusIcon } from "@heroicons/react/24/outline";

const ClientAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clientId = "65d7c3486158325305bfbe33"; // 65d7c3486158325305bfbe33

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch(`/api/appointments?client=${clientId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  const now = new Date();
  const futureAppointments = appointments.filter(
    (appointment) => new Date(appointment.date) >= now
  );
  const pastAppointments = appointments.filter(
    (appointment) => new Date(appointment.date) < now
  );

  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20 lg:m-20">
        <h2 className="text-[#2D4635] font-bold text-xl">Your Appointments</h2>
        <Breadcrumbs />
        <Button
          className="bg-main py-2 pr-6 pl-4 text-sm flex items-center"
          onClick={openModal}
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Appointment type="future" appointments={futureAppointments} />
          <Appointment type="past" appointments={pastAppointments} />
        </div>
      </div>
      <MyModal isOpen={isOpen} onClose={closeModal}>
        <NewAppointment onClose={closeModal} />
      </MyModal>
    </AppStateProvider>
  );
};

export default ClientAppointments;
