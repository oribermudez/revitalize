"use client";

import React, { createContext, useReducer, useContext } from "react";

import initialState from "./initialState";
import appointmentsReducer from "./reducers/appointments";
import usersReducer from "./reducers/users";
import sidebarReducer from "./reducers/sidebar";

const rootReducer = ({ appointments, users }, action) => ({
  appointments: appointmentsReducer(appointments, action),
  users: usersReducer(users, action),
  sidebar: sidebarReducer(action),
});

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
