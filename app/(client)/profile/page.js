"use client"

import { AppStateProvider } from '../../global-state/AppStateContext';
import Breadcrumbs from '../../components/Breadcrumbs';
import ClientData from '@/app/components/client-profile/ClientData';

const Profile = () => {

  return (
    <AppStateProvider>
      <div className="col-span-4 w-full h-full p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">
          Profile
        </h2>
        <Breadcrumbs />
        <ClientData />
      </div>
    </AppStateProvider>
  );
};

export default Profile;
