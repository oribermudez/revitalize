"use client"

import MyCalendar from "@/app/components/MyCalendar";

const Schedule = () => {

  return (
    <div className="col-span-4 w-full h-screen p-8 mt-20">
      <h2 className="text-[#2D4635] font-bold text-xl">
        Schedule
      </h2>
      <MyCalendar />
    </div>
  );
};

export default Schedule;
