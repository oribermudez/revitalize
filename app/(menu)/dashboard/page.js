"use client";

import { AppStateProvider } from "../../global-state/AppStateContext";
import Charts from "@/app/components/Charts";
import { DashboardCard } from "@/app/components/DashboardCard";
import RecentAppointments from "@/app/components/RecentAppointments";
import PatientsVisitsChart from "@/app/components/PatientsVisitsChart";
import ServicesChart from "@/app/components/ServicesChart";
const Dashboard = () => {
  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20 ">
        <h2 className="text-[#2D4635] font-bold text-xl">Dashboard</h2>

        <DashboardCard />

        {/* Second column taking up 3 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <PatientsVisitsChart />
          </div>

          <div className="flex flex-grow justify-center items-center">
            <ServicesChart />
          </div>
          <div className="col-span-3 ">
            <RecentAppointments />
          </div>
        </div>
      </div>
    </AppStateProvider>
  );
};

export default Dashboard;
