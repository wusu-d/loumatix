import React from "react";
import EventTile from "./EventTile";
import { events } from "@/lib/events";

const EventList = () => {
  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
        <p className="text-lg md:text-2xl font-semibold mb-5">Popular Events</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <EventTile key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;
