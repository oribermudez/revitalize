import { Button, Card } from '@material-tailwind/react';
import {
  MapPinIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from "@heroicons/react/24/outline";
import Image from 'next/image';

const ClientData = ({ client }) => {
  

  return (
    <div className="py-6 flex flex-col md:flex-row gap-6 md:justify-between">
      <Card className="rounded-md w-80">
        <div className='flex flex-col items-center justify-center px-4 pt-8'>
          <Image src="/assets/team-1.jpg" width={200} height={200} className="rounded-full" />
          <h4 className="font-semibold text-2xl text-gray-700 mb-4 text-center my-4">Felicia Burke</h4>
          <Button className="w-42 bg-[#544ff7] text-sm mt-2 mb-6 font-normal">Massages Taken: 12</Button>
        </div>
        <div className='flex flex-col justify-center items-center px-4 py-8 bg-slate-100/50 text-sm'>
          <div className='flex flex-col'>
            <div className='flex justify-start mb-3'>
              <MapPinIcon className="h-5 w-5 mr-6 text-slate-400" />
              <p>Calgary, Alberta</p>
            </div>
            <div className='flex justify-start mb-3'>
              <EnvelopeIcon className="h-5 w-5 mr-6 text-slate-400" />
              <p>feliciaburke@gmail.com</p>
            </div>
            <div className='flex justify-start mb-3'>
              <DevicePhoneMobileIcon className="h-5 w-5 mr-6 text-slate-400" />
              <p>+1 (070) 123-4567</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClientData;
