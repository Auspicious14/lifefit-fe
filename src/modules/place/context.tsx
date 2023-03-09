import React, { createContext, useContext, useState } from "react";

interface IPlaceState {
  handleSignUp: (user: any) => Promise<void>;
}

const PlaceContext = React.createContext<IPlaceState>({
  handleSignUp(user) {
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
  const [category, setCategory] = useState<{ label: string; value: string }>({
    value: "",
    label: "",
  });
  const [conditions, setConditions] = useState<{
    label: string;
    value: string;
  }>({ value: "", label: "" });
  const [filter, setFilter] = useState<{ label: string; value: string }>({
    value: "",
    label: "",
  });
  const handleSignUp = async () => {
    // console.log(JSON.stringify());
    try {
      const res = await fetch(
        `http://localhost:4000/places${category}${filter}${conditions}`,
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
    <PlaceContext.Provider value={{ handleSignUp }}>
      {children}
    </PlaceContext.Provider>
  );
};
