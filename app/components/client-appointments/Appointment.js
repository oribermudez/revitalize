import { Card } from "@material-tailwind/react";

const Appointment = ({ type, appointments }) => {
  return (
    <Card className="rounded-md h-42 p-5 flex flex-col">
      <h4 className="my-4 ml-2 font-bold text-xl">
        {type === "future" ? "Upcoming Appointments" : "Appointment History"}
      </h4>
      {appointments && (
        <div className="flex flex-col">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="flex flex-col justify-center "
            >
              <div className="text-gray-900 hover:text-royal text-sm flex items-center hover:bg-accent/20 p-4 rounded-md cursor-pointer">
                <div className="rounded-full w-4 h-4 border border-accent bg-accent" />
                <div className="flex flex-col">
                  <div className="ml-4">
                    <span className="font-bold font">
                      {appointment.duration && appointment.serviceName
                        ? `${appointment.duration}min ${appointment.serviceName}`
                        : "No service set"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="font-semibold">
                      {appointment.date && appointment.time
                        ? `at ${appointment.time} on  ${appointment.date}`
                        : "No date and time set"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="font-semibold">
                      {appointment.therapistName
                        ? `with ${appointment.therapistName}`
                        : "No therapist set"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default Appointment;
