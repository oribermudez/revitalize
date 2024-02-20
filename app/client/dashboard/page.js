"use client"

import { useState } from 'react';
import { Card, Button } from '@material-tailwind/react';
import { AppStateProvider } from '../../global-state/AppStateContext';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import HighlightCards from '@/app/components/client-dashboard/HighlightCards';
import UpcomingAppointments from '@/app/components/client-dashboard/UpcomingAppointments';
import MyCalendar from '@/app/components/MyCalendar';
import NewAppointment from '@/app/components/NewAppointment';
import MyModal from '@/app/components/MyModal';
import { PlusIcon } from "@heroicons/react/24/outline";

const ClientDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">
          Dashboard
        </h2>
        <Breadcrumbs />
        <HighlightCards />
        <div className='grid grid-cols-3 gap-6'>
          <UpcomingAppointments />
          <div className='col-span-2'>
            <Card className='rounded-md p-8'>
              <div className='flex justify-between items-center'>
                <h4 className='font-bold text-black text-xl'>My Calendar</h4>
                  <Button className="bg-main py-2 pr-6 pl-4 text-sm flex items-center" onClick={openModal}>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Appointment
                  </Button>
              </div>
              <MyCalendar />
            </Card>
          </div>
        </div>
      </div>
      <MyModal isOpen={isOpen} onClose={closeModal}>
        <NewAppointment onClose={closeModal} />
      </MyModal>
    </AppStateProvider>
  );
};

export default ClientDashboard;
