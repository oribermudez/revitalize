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
                  ? ` $${appointment.service.description}`
                  : " No service description set"}
              </span>
            </div>
          </div>
          {appointment.client ? (
            <div className="bg-accent/20 p-2 rounded-md">
              <div>
                <span className="font-bold font">Client:</span>
                <span className="font">
                  {appointment.client?.name
                    ? ` ${appointment.client.name}`
                    : " No client set"}
                </span>
              </div>
              <div>
                <span className="font-bold font">Email:</span>
                <span className="font">
                  {appointment.client?.email
                    ? ` ${appointment.client.email}`
                    : " No client set"}
                </span>
              </div>
              <div>
                <span className="font-bold font">Phone:</span>
                <span className="font">
                  {appointment.client?.phone
                    ? ` ${appointment.client.phone}`
                    : " No client set"}
                </span>
              </div>
              <div>
                <span className="font-bold font">Address:</span>
                <span className="font">
                  {appointment.client?.address
                    ? ` ${appointment.client.address.street} ${appointment.client.address.city} ${appointment.client.address.province} ${appointment.client.address.postalCode}`
                    : " No client set"}
                </span>
              </div>
              <div>
                <span className="font-bold font">Massages Taken:</span>
                <span className="font">
                  {appointment.client?.massagesTaken
                    ? ` ${appointment.client.massagesTaken}`
                    : " No client set"}
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-accent/20 p-2 rounded-md">No client set.</div>
          )}
        </div>
      )}
    </Card>
  );
};

export default Appointment;
