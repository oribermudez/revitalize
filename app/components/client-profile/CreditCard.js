"use client"

import { Card } from '@material-tailwind/react';
import Image from 'next/image';

const CreditCard = ({ payment }) => {
  return (
    <div className="my-5 flex flex-col md:flex-row gap-6 md:justify-between">
      <Card className="rounded-md md:w-96">
        <div className='flex items-center justify-between px-8 pt-2 pb-5 lg:pb-2'>
          <h4 className="font-semibold text-xl text-slate-700 text-center mt-4">Payment Method</h4>
        </div>
        <div className='h-48 bg-gradient-to-r from-accent to-secondary rounded-md m-2 md:m-8 shadow-md flex flex-col items-center justify-between p-4'>
          <div className='w-full flex justify-between items-center'>
            <Image src="/assets/chip.png" width={50} height={100} className="h-10 w-12" alt='Chip'/>
            <Image src="/assets/visa.png" width={100} height={50} className="h-6 w-20" alt='Visa'/>
          </div>
          <div className='w-full text-white text-xl md:text-2xl text-center'>
            <span>{payment.cardNumber}</span>
          </div>
          <div className='w-full text-white flex items-center justify-between'>
            <div className='flex flex-col'>
              <span className='text-xs font-thin'>CARD HOLDER</span>
              <span>{payment.cardHolder}</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-xs font-thin'>EXPIRE</span>
              <span>{payment.expiryDate}</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col pb-3 pt-8 bg-slate-100/50 text-sm border-t border-slate-200 mt-5'>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Card Type:</span>
            <span>{payment.type}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Card Holder:</span>
            <span>{payment.cardHolder}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Bank:</span>
            <span>{payment.bank}</span>
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

export default CreditCard;
