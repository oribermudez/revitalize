//app/client/profile/page.js
"use client"

import { AppStateProvider } from '../../../global-state/AppStateContext';
import InsuranceInformation from '@/app/components/client-profile/InsuranceInformation';
import ClientData from '@/app/components/client-profile/ClientData';
import PersonalDetails from '@/app/components/client-profile/HomeAddress';
import CreditCard from '@/app/components/client-profile/CreditCard';
import SoapNotes from '@/app/components/SoapNotes';


const PatientProfile = ( { client }) => {

    return (
      <AppStateProvider>
        <div className="col-span-1 md:col-span-4 w-full h-full p-8 mt-20">
          <h2 className="text-[#2D4635] font-bold text-xl">
            Patient Profile
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
            <ClientData client={client} />
            <div>
              <PersonalDetails address={client.address} />
              <InsuranceInformation insurance={client.insurance} />
            </div>
            <div>
              <CreditCard payment={client.payment}/>
            </div>
          </div>
          <div className="mb-4">
            <SoapNotes client={client}/>
          </div>
        </div>
      </AppStateProvider>
    );
  };

  export default PatientProfile;