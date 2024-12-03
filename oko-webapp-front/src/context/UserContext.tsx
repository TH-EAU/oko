"use client";
import User from "@/models/User";
import { useUserDetails } from "@/queries/user.queries";
import { redirect, usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const UserContext = createContext<User | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data: user } = useUserDetails(2);
  const currentPath = usePathname();

  useEffect(() => {
    if (!user && currentPath !== "/signin") {
      redirect("/signin");
    }
  }, [user]);

  return (
    <>
      <UserContext.Provider value={user ? user : null}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export const useCurrentUser = () => {
  const currentUserContext = useContext(UserContext);

  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};
