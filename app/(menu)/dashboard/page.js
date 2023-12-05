"use client"

import Charts from "@/app/components/Charts";
import RecentAppointments from "@/app/components/RecentAppointments";

const Dashboard = () => {

  return (
    <div className="col-span-4 w-full h-full p-8 mt-20">
      <h2 className="text-[#2D4635] font-bold text-xl">
        Dashboard
      </h2>
      <Charts />
      <RecentAppointments />
    </div>
  );
};

export default Dashboard;
