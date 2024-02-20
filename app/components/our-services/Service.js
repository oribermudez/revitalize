import { Card } from '@material-tailwind/react';
import Image from 'next/image';

const Service = ({ massage, index }) => {

  const setBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return 'bg-secondary/30';
      case 1:
      case 2:
        return 'bg-white';
      default:
        return 'bg-accent/30';
    }
  };

  return (
    <Card className={`group transition rounded-md duration-300 ease-in-out transform hover:scale-105 ${setBackgroundColor(index)}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md lg:h-64 overflow-hidden">
        <div className="relative">
          <Image src={massage.image} alt={massage.title} width={400} height={400} className="w-80 h-full object-cover rounded-l-md" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-thin p-4 border border-white rounded-md">Book Now</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4">
          <h5 className="font-bold mb-4">{massage.title}</h5>
          <div>{massage.description}</div>
        </div>
      </div>
    </Card>
  );
};

export default Service;
