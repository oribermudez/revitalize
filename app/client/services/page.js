"use client"

import { AppStateProvider } from '../../global-state/AppStateContext';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ServiceList from '@/app/components/our-services/ServiceList';

const Services = () => {

  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">
          Our Services
        </h2>
        <Breadcrumbs />
        <div className=''>
          <ServiceList />
        </div>
      </div>
    </AppStateProvider>
  );
};

export default Services;
