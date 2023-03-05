import React, { createContext, useContext } from "react";

interface ISignUpState {}

const SignUpContext = createContext<ISignUpState>({});

export const useSignUpState = () => {
  const context = useContext(SignUpContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }

  return context;
};

interface IProps {
  children: React.ReactNode;
}
export const SignUpContextProvider: React.FC<IProps> = ({ children }) => {
  return <SignUpContext.Provider value={{}}>{children}</SignUpContext.Provider>;
};
