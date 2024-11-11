"use client";
import { Event } from "@/lib/events";
import { createContext, useContext, useState, ReactNode } from "react";

type EventContextType = {
  selectedEvent: Event | null;
  setSelectedEvent: (event: Event | null) => void;
  ticketQuantities: {
    Regular: number;
    VIP: number;
    Backstage: number;
  };
  setTicketQuantities: React.Dispatch<React.SetStateAction<{
    Regular: number;
    VIP: number;
    Backstage: number;
  }>>;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [ticketQuantities, setTicketQuantities] = useState({
    Regular: 0,
    VIP: 0,
    Backstage: 0,
  });

  return (
    <EventContext.Provider 
      value={{ 
        selectedEvent, 
        setSelectedEvent, 
        ticketQuantities, 
        setTicketQuantities 
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
}
