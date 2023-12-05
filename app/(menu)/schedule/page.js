"use client"

import { useAppState, AppStateProvider } from '../../global-state/AppStateContext';
import MyCalendar from "@/app/components/MyCalendar";

const Schedule = () => {
  

  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-screen p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">
          Schedule
        </h2>
        <MyCalendar />
      </div>
    </AppStateProvider>
  );
};

export default Schedule;
