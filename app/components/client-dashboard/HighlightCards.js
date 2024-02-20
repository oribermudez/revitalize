import { Card } from '@material-tailwind/react';
import {
  StarIcon,
  ArrowTrendingUpIcon,
  GiftIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

const HighlightCards = () => {
  
  return (
    <div className='grid grid-cols-3 gap-6 py-8'>
      <Card className="rounded-md w-full h-42 p-6 flex flex-col duration-300 ease-in-out transform hover:scale-105 hover:bg-secondary/30">
        <div className='flex items-center text-slate-500'>
          <span className='text-white bg-main p-2 w-fit rounded-md text-right mr-4'>
            <StarIcon className="h-5" />
          </span>
          <span className='font-semibold'>Favorite treatment</span>
        </div>
        <div className='flex justify-between'>
          <div className='font-bold text-lg text-black mt-6 border-b-2 border-main'>Relaxation Massage</div>
          <div className='flex flex-col text-center'>
            <span className='font-bold text-2xl flex items-center justify-center'>
              4
              <span className='text-main text-xs flex items-center'>
                <ArrowTrendingUpIcon className="h-5 ml-2" />
                + 2
              </span>
            </span>
            <span className='text-slate-400 text-thin text-xs'> this month</span>
          </div>
        </div>
      </Card>
      <Card className="rounded-md w-full h-42 p-6 flex flex-col duration-300 ease-in-out transform hover:scale-105 hover:bg-accent/20">
        <div className='flex items-center text-slate-500'>
          <span className='text-white bg-accent p-2 w-fit rounded-md text-right mr-4'>
            <GiftIcon className="h-5" />
          </span>
          <span className='font-semibold'>Loyalty Rewards</span>
        </div>
        <div className='flex justify-between items-end'>
          <div className='font-bold text-xl text-black mt-6 border-b-2 border-accent'>800 points</div>
          <div className='flex flex-col text-center'>
            <span className='font-bold text-xl flex items-center justify-center'>
              +200
              <span className='text-main text-xs flex items-center'>
                <ArrowTrendingUpIcon className="h-5 ml-2" />
              </span>
            </span>
            <span className='text-slate-400 text-thin text-xs'>for a free treatment</span>
          </div>
        </div>
      </Card>
      <Card className="rounded-md w-full h-42 p-6 flex flex-col duration-300 ease-in-out transform hover:scale-105 hover:bg-secondary/30">
        <div className='flex items-center text-slate-500'>
          <span className='text-white bg-secondary p-2 w-fit rounded-md text-right mr-4'>
            <HeartIcon className="h-5" />
          </span>
          <span className='font-semibold'>Preferred Therapist</span>
        </div>
        <div className='flex justify-between'>
          <div className='font-bold text-lg text-black mt-6 border-b-2 border-secondary'>Brooklyn Harveko</div>
          <div className='flex flex-col text-center'>
            <span className='font-bold text-2xl flex items-center justify-center'>
              12
              <span className='text-main text-xs flex items-center'>
                <ArrowTrendingUpIcon className="h-5 ml-2" />
                + 2
              </span>
            </span>
            <span className='text-slate-400 text-thin text-xs'>sessions taken</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HighlightCards;
