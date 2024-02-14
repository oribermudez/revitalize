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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column taking up 3 */}
          <div className="col-span-3 md:col-start-1 md:col-end-4">
            <DashboardCard />
          </div>
          {/* Second column taking up 3 */}
          <div className="md:col-span-3 md:col-start-1 md:col-end-4">
            <div className="col-span-3 md:col-start-1 md:col-end-3">
              <RecentAppointments />
            </div>
            <div className="col-span-3 md:col-span-1 md:col-end-4">
              <PatientsVisitsChart />
            </div>

            <div className="col-span-3 md:col-span-1 md:col-end-4">
              <ServicesChart />
            </div>
          </div>
        </div>
      </div>
    </AppStateProvider>
  );
};

export default Dashboard;
