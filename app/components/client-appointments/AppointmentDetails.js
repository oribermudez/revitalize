import { Card } from "@material-tailwind/react";
import { formatDate } from "@/app/utils/formatDate";

const Appointment = ({ appointment }) => {
  console.log(appointment);
  return (
    <Card className="rounded-md h-42 p-5 flex flex-col">
      <h4 className="my-4 ml-2 font-bold text-xl">Appointment Details</h4>
      {appointment && (
        <div className="flex flex-col">
          <div className="bg-accent/20 p-2 rounded-md">
            <div>
              <span className="font-bold font">Appointment Date:</span>
              <span className="font">
                {appointment.startTime
                  ? ` ${formatDate(appointment.startTime)}`
                  : " No appointment date/time set"}
              </span>
            </div>
            <div>
              <span className="font-bold font">Location:</span>
              <span className="font">
                {appointment.therapist?.address
                  ? ` $${appointment.therapist.address.street}, ${appointment.therapist.address.city} ${appointment.therapist.address.province}, ${appointment.therapist.address.postalCode}`
                  : " No street address set"}
              </span>
            </div>
            <div>
              <span className="font-bold font">Therapist:</span>
              <span className="font">
                {appointment.therapist?.name
                  ? ` ${appointment.therapist.name}`
                  : " No therapist set"}
              </span>
            </div>
            <div>
              <span className="font-bold font">Service:</span>
              <span className="font">
                {appointment.service?.length
                  ? ` ${appointment.service.name}`
                  : " No service set"}
              </span>
            </div>
            <div>
              <span className="font-bold font">Duration:</span>
              <span className="font">
                {appointment.service?.length
                  ? ` ${appointment.service.length} minutes`
                  : " No service length set"}
              </span>
            </div>
            <div>
              <span className="font-bold font">Price:</span>
              <span className="font">
                {appointment.service?.price
                  ? ` $${Number(appointment.service.price).toFixed(2)} CAD`
                  : " No service price set"}
              </span>
            </div>
            <div>
              <span className="font-bold font">Description:</span>
              <span className="font">
                {appointment.service?.description
                  ? ` ${appointment.service.description}`
                  : " No service description set"}
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Appointment;
