"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { TOGGLE_SIDEBAR, toggleSidebar } from "../global-state/actions";
import { useAppState } from "../global-state/AppStateContext";

const FixedNavbar = () => {
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image src="/assets/logo.png" width={160} height={65} alt="Logo" />
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:flex justify-between items-center text-black text-sm">
            Welcome, Brooklyn
          </div>
          <div className="text-black lg:hidden" onClick={handleToggleSidebar}>
            HOLAA
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default FixedNavbar;
