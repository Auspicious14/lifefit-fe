import React, { createContext, useContext, useState } from "react";

interface IPlaceState {
  handleGetPlaces: (
    category: any,
    filter: any,
    conditions: any
  ) => Promise<void>;
}

const PlaceContext = React.createContext<IPlaceState>({
  handleGetPlaces(category, filter, conditions) {
    return null as any;
  },
});

export const usePlaceState = () => {
  const context = React.useContext(PlaceContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }

  return context;
};

interface IProps {
  children: React.ReactNode;
}
export const PlaceContextProvider: React.FC<IProps> = ({ children }) => {
  const handleGetPlaces = async (
    category: any,
    filter: any,
    conditions: any
  ) => {
    // console.log(JSON.stringify());
    try {
      const res = await fetch(
        `http://localhost:4000/places?categories=${category}&filter=${filter}&conditions=${conditions}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PlaceContext.Provider value={{ handleGetPlaces }}>
      {children}
    </PlaceContext.Provider>
  );
};
