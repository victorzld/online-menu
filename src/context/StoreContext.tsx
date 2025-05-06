import React, { createContext, useContext, useState, useEffect } from "react";

interface StoreContextType {
  isOpen: boolean;
  openingTime: string;
  closingTime: string;
  currentTime: Date;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const openingTime = "00:01";
  const closingTime = "23:59";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const isOpen = (() => {
    const now = currentTime;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeValue = hours * 60 + minutes;

    const [openingHours, openingMinutes] = openingTime.split(":").map(Number);
    const openingTimeValue = openingHours * 60 + openingMinutes;

    const [closingHours, closingMinutes] = closingTime.split(":").map(Number);
    const closingTimeValue = closingHours * 60 + closingMinutes;

    return (
      currentTimeValue >= openingTimeValue &&
      currentTimeValue < closingTimeValue
    );
  })();

  return (
    <StoreContext.Provider
      value={{ isOpen, openingTime, closingTime, currentTime }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
