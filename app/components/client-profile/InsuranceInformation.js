import { Card } from '@material-tailwind/react';
import Image from 'next/image';

const InsuranceInformation = ({ insurance }) => {
  
  return (
    <div className="mt-5 flex flex-col md:flex-row gap-6 md:justify-between">
      <Card className="rounded-md w-96 h-64">
        <div className='flex items-center justify-between px-8 pt-2 pb-5'>
          <h4 className="font-semibold text-xl text-slate-700 mb-4 text-center my-4">Insurance Information</h4>        </div>
        <div>
          <div className='text-sm px-8 pb-3 flex justify-between'>
            <span className='text-slate-500'>Provider:</span>
            <Image src={`/assets/${insurance.provider}.png`} width={200} height={10} className="w-28" alt='Insurance'/>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Policy Number:</span>
            <span>{insurance.policyNumber}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Expiry Date:</span>
            <span>{insurance.expiryDate}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Status:</span>
            <span className='py-1 px-2 bg-secondary/60 rounded-md text-main'>Verified</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InsuranceInformation;
