import { Card } from '@material-tailwind/react';

const PersonalDetails = ({ address }) => {
  
  return (
    <div className="mt-5 flex flex-col md:flex-row gap-6 md:justify-between">
      <Card className="rounded-md w-96 h-64">
        <div className='flex items-center justify-between px-8 pt-2 pb-5'>
          <h4 className="font-semibold text-xl text-slate-700 mb-4 text-center my-4">Home Address</h4>
        </div>
        <div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Street and Number:</span>
            <span>{address.street}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>City:</span>
            <span>{address.city}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Province:</span>
            <span>{address.province}</span>
          </div>
          <div className='text-sm px-8 pb-4 flex justify-between'>
            <span className='text-slate-500'>Postal Code:</span>
            <span>{address.postalCode}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonalDetails;
