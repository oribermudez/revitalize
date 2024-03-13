"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { TOGGLE_SIDEBAR, toggleSidebar } from "../global-state/actions";
import { useAppState } from "../global-state/AppStateContext";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useUser } from "@auth0/nextjs-auth0/client";

const FixedNavbar = () => {
  const { dispatch } = useAppState();
  const { user, error, isLoading } = useUser();

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar({ type: TOGGLE_SIDEBAR }));
  };
  console.log(user);

  return (
    <Navbar className="fixed top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 ">
      <div className="flex items-center justify-between text-blue-slate-900">
        <Image src="/assets/logo.png" width={160} height={65} alt="Logo" />
        <div className="flex items-center gap-4">
          <div className="mr-4 flex justify-between items-center text-black text-sm">
            {user && (
              <div className="mr-2 flex justify-between items-center text-black text-sm">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="pl-2">
                  <h2 className="text-lg font-semibold">
                    Welcome, {user.name}
                  </h2>
                  <button
                    className=" bg-main text-white font-semibold px-4 py-1 rounded hover:bg-[#77aba0] w-full flex gap-4 justify-center items-center"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="text-black lg:hidden" onClick={handleToggleSidebar}>
            <Bars3Icon className="h-6 w-6 mr-2 text-black" />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default FixedNavbar;
