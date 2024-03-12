"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  CalendarIcon,
  UsersIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CalculatorIcon,
  BellAlertIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
 
const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
    if (item === 'Dashboard' || item === 'Schedule' || item === 'Forms' || item === 'Patients') {
    router.push(`/${item.toLowerCase()}`);
    };
  };

  useEffect(() => {
    const curatedPath = path.slice(1);
    setActiveItem(curatedPath.charAt(0).toUpperCase() + curatedPath.slice(1))
  }, [path]);

  const isItemActive = (item) => item === activeItem;
 
  return (
    <Card className="fixed h-screen w-full max-w-[19rem] p-4 shadow-xl shadow-blue-gray-900/5 text-[#828282] flex flex-col justify-center text-sm">
      <div className='text-xs ml-3 text-gray-400 mb-3 mt-20'>
        MENU
      </div>
      <List>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Dashboard') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Dashboard')}
         >
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Dashboard
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Schedule') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Schedule')}
         >
          <ListItemPrefix>
            <CalendarIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Schedule
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Appointments') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Appointments')}
         >
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Appointments
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Forms') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Forms')}
         >
          <ListItemPrefix>
            <ClipboardDocumentCheckIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Forms
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Patients') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Patients')}
         >
          <ListItemPrefix>
            <UsersIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Patients
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Therapists') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Therapists')}
         >
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Therapists
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Invoices') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Invoices')}
         >
          <ListItemPrefix>
            <CalculatorIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Invoices
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Analytics') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Analytics')}
         >
          <ListItemPrefix>
            <ChartBarIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
            Analytics
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        <div className='text-xs ml-3 my-3 text-gray-400'>
          GENERAL
        </div>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Notifications') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Notifications')}
         >
          <ListItemPrefix>
            <BellAlertIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
          Notifications
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Profile') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Profile')}
         >
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
          Profile
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Availability') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Availability')}
         >
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
          Availability
        </ListItem>
         <ListItem
          className={`rounded-md p-3 mb-1 ${isItemActive('Logout') ? 'text-white bg-[#77aba0]' : 'hover:text-white hover:bg-[#77aba0]'}`}
          onClick={() => handleItemClick('Logout')}
         >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 mr-6" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;