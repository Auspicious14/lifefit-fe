import React, { createContext, useContext, useState } from "react";

interface IPlaceState {
  handleGetPlaces: (
    category: any,
    filter: any,
    conditions?: any
  ) => Promise<void>;
  handleGetLocations: (name: string, country: string) => Promise<void>;
}

const PlaceContext = React.createContext<IPlaceState>({
  handleGetPlaces(category, filter, conditions) {
    return null as any;
  },
  handleGetLocations(name, country) {
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
    conditions?: any
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

  const handleGetLocations = async (name: string, country: string) => {
    try {
      const response = await fetch(
        `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${name}&countryFilter=${country}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PlaceContext.Provider value={{ handleGetPlaces, handleGetLocations }}>
      {children}
    </PlaceContext.Provider>
  );
};
