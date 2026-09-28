import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext(null);

export function AppointmentProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AppointmentContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointmentModal() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within an AppointmentProvider");
  }
  return context;
}
