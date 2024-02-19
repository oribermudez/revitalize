import { Button, Card } from '@material-tailwind/react';
import Carousel from '../Carousel';

const slides = [
  {image: '/assets/massage1.jpg', title: 'Relaxing Massage'},
  {image: '/assets/massage4.jpg', title: 'Facial Massage'},
  {image: '/assets/massage3.jpg', title: 'Deep Tissue Massage'},
  {image: '/assets/relax.jpg', title: 'Hot Stone Massage'}
];

const RecommendedForYou = ({ address }) => {
  
  return (
    <div className="mt-4 flex flex-col md:flex-row gap-6 md:justify-between">
      <Card className="rounded-md w-96 h-64">
        <div className='flex items-center justify-between px-8 pt-2'>
          <h4 className="font-semibold text-xl text-gray-700 mb-4 text-center my-4">Recommended for you</h4>
        </div>
        <div className=''>
         <Carousel slides={slides} />
        </div>
      </Card>
    </div>
  );
};

export default RecommendedForYou;
