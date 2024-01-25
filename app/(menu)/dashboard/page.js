"use client";

import { AppStateProvider } from "../../global-state/AppStateContext";
import Charts from "@/app/components/Charts";
import { DashboardCard } from "@/app/components/DashboardCard";
import RecentAppointments from "@/app/components/RecentAppointments";

const cardDataArray = [
  { title: "Cancellations", value: 5, unit: "/week" },
  { title: "Appointments", value: 45, unit: "/week" },
  { title: "Patients", value: 50, unit: "/week" },
];

const Dashboard = () => {
  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">Dashboard</h2>
        <div className="flex flex-wrap gap-4">
          {cardDataArray.map((cardDataContent, index) => (
            <DashboardCard key={index} cardData={cardDataContent} />
          ))}
        </div>
        <Charts />
        <RecentAppointments />
      </div>
    </AppStateProvider>
  );
};

export default Dashboard;
