"use client";

import { AppStateProvider } from "../../global-state/AppStateContext";
import Charts from "@/app/components/Charts";
import { DashboardCard } from "@/app/components/DashboardCard";
import RecentAppointments from "@/app/components/RecentAppointments";
import CustomerReview from "@/app/components/CustomerReview";

const Dashboard = () => {
  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">Dashboard</h2>
        <DashboardCard />
        <RecentAppointments />

        <CustomerReview />
      </div>
    </AppStateProvider>
  );
};

export default Dashboard;
