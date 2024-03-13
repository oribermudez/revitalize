//app/client/profile/page.js
"use client";

import { AppStateProvider } from "../../../global-state/AppStateContext";
import InsuranceInformation from "@/app/components/client-profile/InsuranceInformation";
import ClientData from "@/app/components/client-profile/ClientData";
import PersonalDetails from "@/app/components/client-profile/HomeAddress";
import CreditCard from "@/app/components/client-profile/CreditCard";
import SoapNotes from "@/app/components/SoapNotes";

const client = {
  name: "Felicia Burke",
  email: "feliciaburke@gmail.com",
  phone: "+1 (070) 123-4567",
  location: "Calgary, Alberta",
  massagesTaken: 12,
  address: {
    street: "123 Main St",
    city: "Calgary",
    province: "Alberta",
    postalCode: "T2T 2T2",
  },
  insurance: {
    provider: "sunlife",
    policyNumber: "123456789",
    expiryDate: "2021-12-31",
    isVerified: true,
  },
  payment: {
    brand: "VISA",
    cardHolder: "Felicia Burke",
    expiryDate: "08 / 26",
    cardNumber: "4354 0566 5566 5556",
    type: "Credit Card",
    bank: "TD Canada Trust",
    isVerified: true,
  },
};

const PatientProfile = () => {
  console.log(client);
  return (
    <AppStateProvider>
      {client && (
        <div className="col-span-1 md:col-span-4 w-full h-full p-8 mt-20">
          <h2 className="text-[#2D4635] font-bold text-xl">Patient Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            <ClientData client={client} />
            <div>
              <PersonalDetails address={client.address} />
              <InsuranceInformation insurance={client.insurance} />
            </div>
            <div>
              <CreditCard payment={client.payment} />
            </div>
          </div>
          <div className="mb-4">
            <SoapNotes client={client} />
          </div>
        </div>
      )}
    </AppStateProvider>
  );
};

export default PatientProfile;
