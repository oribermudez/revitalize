import { Card } from "@material-tailwind/react";

const appointments = [
  {
    id: "appointment-1",
    img: "/assets/team-3.jpg",
    name: "John Michael",
    service: "Deep Tissue Massage",
    duration: "60 min",
    active: true,
    date: "Feb 20, 2024",
    start: new Date(2023, 11, 1, 10, 0),
    endEnd: new Date(2023, 11, 1, 12, 0),
    therapist: "Brooklyn Harveko",
  },
  {
    id: "appointment-2",
    img: "/assets/team-3.jpg",
    name: "John Michael",
    service: "Facial Cupping",
    duration: "60 min",
    active: true,
    date: "Feb 26, 2024",
    start: new Date(2023, 11, 1, 10, 0),
    endEnd: new Date(2023, 11, 1, 12, 0),
    therapist: "Brooklyn Harveko",
  },
  {
    id: "appointment-3",
    img: "/assets/team-3.jpg",
    name: "John Michael",
    service: "Relaxation Massage",
    duration: "60 min",
    active: true,
    date: "Apr 24, 2024",
    start: new Date(2023, 11, 1, 10, 0),
    endEnd: new Date(2023, 11, 1, 12, 0),
    therapist: "Brooklyn Harveko",
  },
  {
    id: "appointment-4",
    img: "/assets/team-3.jpg",
    name: "John Michael",
    service: "Hot Stone Massage",
    duration: "60 min",
    active: true,
    date: "Mar 27, 2024",
    start: new Date(2023, 11, 1, 10, 0),
    endEnd: new Date(2023, 11, 1, 12, 0),
    therapist: "Brooklyn Harveko",
  },
];

const UpcomingAppointments = () => {
  return (
    <Card className="rounded-md w-full h-42 p-5 flex flex-col">
      <h4 className="my-4 ml-2 font-bold text-xl">Upcoming Appointments</h4>
      <div className="flex flex-col py-8">
        {appointments.map((appointment, index) => (
          <div key={appointment.id} className="flex flex-col justify-center ">
            <div
              href={appointment.url}
              className="text-slate-900 hover:text-royal text-sm flex items-center hover:bg-accent/20 p-4 rounded-md cursor-pointer">
              <div className="rounded-full w-4 h-4 border border-accent bg-accent" />
              <div className="flex flex-col">
                <div className="ml-4">
                  <span className="font-bold font">{appointment.service}</span>
                </div>
                <div className="ml-4">
                  <span className="font-semibold">Date:</span>{" "}
                  {appointment.date}
                </div>
                <div className="ml-4">
                  <span className="font-semibold">Therapist:</span>{" "}
                  {appointment.therapist}
                </div>
              </div>
            </div>
            {index !== appointments.length - 1 && (
              <div
                className={`border-l-2 border-dashed ml-[22px] border-l-secondary h-8`}
              />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpcomingAppointments;
