"use client";

import { useState, useEffect } from "react";
import { Card, Button } from "@material-tailwind/react";
import { AppStateProvider } from "@/app/global-state/AppStateContext";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import HighlightCards from "@/app/components/client-dashboard/HighlightCards";
import Appointment from "@/app/components/therapist-appointments/Appointment";
import MyCalendar from "@/app/components/MyCalendar";
import NewAppointment from "@/app/components/therapist-appointments/NewAppointment";
import AppointmentDetails from "@/app/components/therapist-appointments/AppointmentDetails";
import MyModal from "@/app/components/MyModal";
import { PlusIcon } from "@heroicons/react/24/outline";

const ClientAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [futureAppointments, setFutureAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
    setDetailOpen(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const therapistId = "65fcee40d176ae6318341362";

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch(
        `/api/appointments?therapist=${therapistId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    const now = new Date();
    const future = appointments.filter(
      (appointment) => new Date(appointment.startTime) >= now
    );
    const past = appointments.filter(
      (appointment) => new Date(appointment.startTime) < now
    );
    setFutureAppointments(future);
    setPastAppointments(past);
  }, [appointments]);

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
          <Appointment
            title="Upcoming Appointments"
            appointments={futureAppointments}
            onAppointmentClick={handleAppointmentClick}
          />
          <Appointment
            title="Past Appointments"
            appointments={pastAppointments}
            onAppointmentClick={handleAppointmentClick}
          />
          <Appointment
            title="All Appointments"
            appointments={appointments}
            onAppointmentClick={handleAppointmentClick}
          />
        </div>
      </div>
      <MyModal isOpen={isOpen} onClose={closeModal}>
        <NewAppointment onClose={closeModal} />
      </MyModal>
      <MyModal isOpen={isDetailOpen} onClose={() => setDetailOpen(false)}>
        <AppointmentDetails appointment={selectedAppointment} />
      </MyModal>
    </AppStateProvider>
  );
};

export default ClientAppointments;
