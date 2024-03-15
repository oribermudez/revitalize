"use client";

import { AppStateProvider } from "../../global-state/AppStateContext";

import MyPatients from "@/app/components/MyPatients";

const Patients = () => {
  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-screen p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">Patients</h2>
        <MyPatients />
      </div>
    </AppStateProvider>
  );
};

export default Patients;
