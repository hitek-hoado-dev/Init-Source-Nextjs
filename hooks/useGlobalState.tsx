import { STORAGES } from "@/constants/storages";
import { getCookie } from "@/lib/utils/cookie";
import { IUserLoginType } from "@/types/userType";
import React, { createContext, useEffect, useState } from "react";

interface GlobalStateContextProps {
  user: IUserLoginType | null;
  setUser: (user: IUserLoginType | null) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(
  undefined
);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUserLoginType | null>(null);

  useEffect(() => {
    if (!user) {
      const storedUser = getCookie(STORAGES.USER_LOGIN);
      if (storedUser) setUser(storedUser);
    }
  }, [user]);

  return (
    <GlobalStateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = React.useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalState");
  }
  return context;
};
