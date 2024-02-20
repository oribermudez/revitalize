"use client"

import { AppStateProvider } from '../../global-state/AppStateContext';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Services from '@/app/components/client-dashboard/ServiceList';

const ServiceList = () => {

  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">
          Our Services
        </h2>
        <Breadcrumbs />
        <div className=''>
          <Services />
        </div>
      </div>
    </AppStateProvider>
  );
};

export default ServiceList;
