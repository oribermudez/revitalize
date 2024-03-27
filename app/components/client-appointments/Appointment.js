import { Card } from "@material-tailwind/react";
import { formatDate } from "@/app/utils/formatDate";

const Appointment = ({ title, appointments, onAppointmentClick }) => {
  return (
    <Card className="rounded-md h-42 p-5 flex flex-col">
      <h4 className="my-4 ml-2 font-bold text-xl">{title}</h4>
      {appointments && (
        <div className="flex flex-col">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="flex flex-col justify-center "
            >
              <div
                onClick={() => onAppointmentClick(appointment)}
                className="text-gray-900 hover:text-royal text-sm flex items-center hover:bg-accent/20 p-4 rounded-md cursor-pointer"
              >
                <div className="rounded-full w-4 h-4 border border-accent bg-accent" />
                <div className="flex flex-col">
                  <div className="ml-4">
                    <span className="font-bold font">
                      {appointment.service.length && appointment.service.name
                        ? `${appointment.service.length}min ${appointment.service.name}`
                        : "No service set"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="font-semibold">
                      {appointment.startTime
                        ? `${formatDate(appointment.startTime)}`
                        : "No date and time set"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="font-semibold">
                      {appointment.therapist.name
                        ? `with ${appointment.therapist.name}`
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
