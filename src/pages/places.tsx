import React from "react";
import { PlaceContextProvider } from "../modules/place/context";
import { PlacePage } from "../modules/place/page";

const Places = () => {
  return (
    <PlaceContextProvider>
      <PlacePage />
    </PlaceContextProvider>
  );
};

export default Places;
