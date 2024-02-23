import { Button, Card } from '@material-tailwind/react';
import {
  MapPinIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from "@heroicons/react/24/outline";
import Image from 'next/image';

const ClientData = ({ client }) => {
  
  return (
    <div className="my-5 flex flex-col md:flex-row gap-6 md:justify-between">
      <Card className="rounded-md md:w-96">
        <div className='flex flex-col items-center justify-center px-4 pt-8'>
          <Image src="/assets/team-1.jpg" width={200} height={200} className="rounded-full" alt='Profile Pic'/>
          <h4 className="font-semibold text-2xl text-slate-700 mb-4 text-center my-4">{client.name}</h4>
          <Button className="w-42 bg-main hover:bg-main/80 text-sm mt-1 mb-6 font-normal">Massages Taken: {client.massagesTaken}</Button>
        </div>
        <div className='flex flex-col justify-center items-center px-4 py-8 bg-slate-100/50 text-sm border-t border-slate-200'>
          <div className='flex flex-col'>
            <div className='flex justify-start mb-3'>
              <MapPinIcon className="h-5 w-5 mr-6 text-slate-500" />
              <p>{client.location}</p>
            </div>
            <div className='flex justify-start mb-3'>
              <EnvelopeIcon className="h-5 w-5 mr-6 text-slate-500" />
              <p>{client.email}</p>
            </div>
            <div className='flex justify-start mb-3'>
              <DevicePhoneMobileIcon className="h-5 w-5 mr-6 text-slate-500" />
              <p>{client.phone}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClientData;
