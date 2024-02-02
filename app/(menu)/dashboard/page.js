"use client";

import { AppStateProvider } from "../../global-state/AppStateContext";
import Charts from "@/app/components/Charts";
import { DashboardCard } from "@/app/components/DashboardCard";
import RecentAppointments from "@/app/components/RecentAppointments";
import PatientsVisitsChart from "@/app/components/PatientsVisitsChart";

const Dashboard = () => {
  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20 ">
        <h2 className="text-[#2D4635] font-bold text-xl">Dashboard</h2>
        <div className="grid grid-cols-3 gap-8">
          {/* First column taking up 3 */}
          <div className="col-start-1 col-end-4">
            <DashboardCard />
          </div>
          <div className="col-start-1 col-end-3">
            <RecentAppointments />
          </div>
          <div className="col-span-1 col-end-4">
            <PatientsVisitsChart />
          </div>
        </div>
      </div>
    </AppStateProvider>
  );
};

export default Dashboard;
