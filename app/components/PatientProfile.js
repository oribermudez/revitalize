"use client";

import { AppStateProvider } from '../global-state/AppStateContext';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ClientData from '@/app/components/client-profile/ClientData';
import InsuranceInformation from '@/app/components/client-profile/InsuranceInformation';
import PersonalDetails from '@/app/components/client-profile/HomeAddress';
import CreditCard from '@/app/components/client-profile/CreditCard';
import { useEffect } from 'react';
import { useAppState } from '../global-state/AppStateContext';
import { Card, Button } from "@material-tailwind/react";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const PatientProfile = ({ client, setShowProfile }) => {

    const handleBackButton = () => {
        setShowProfile(false);
    };

const fetchData = async () => {
    try {
        const response = await fetch(`/api/clients/?soapId=${client.soapId}`, {
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
      <AppStateProvider>
        <Button
          onClick={handleBackButton}
          className="text-black bg-white border-main border-2 mt-5 mb-10 py-2 pr-6 pl-4 text-sm flex items-center"
        >
            <ArrowLeftIcon className="h-5 w-5 mr-5" />
          Back to Patient List
        </Button>
        <Card className="bg-white rounded-md p-6 w-full h-[700px] ">
        <div className="col-span-4 md:col-span-4 w-full h-full p-8">
          <h2 className="text-[#2D4635] font-bold text-xl">
            {client.firstName} {client.lastName}
          </h2>

        </div>
        </Card>
      </AppStateProvider>
    );
    };

  
  export default PatientProfile;