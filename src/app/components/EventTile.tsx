"use client";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/lib/events";
import { useEvent } from "@/context/EventContext";

const EventTile = ({ event }: { event: Event }) => {
  const { setSelectedEvent } = useEvent();

  return (
    <Link
      href={`/${event.id}`}
      className="block rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      onClick={() => setSelectedEvent(event)}
    >
      <div className="group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="group-hover:scale-110 transition-transform duration-300"
            objectFit="cover"
          />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 space-y-1">
          <p className="text-base font-bold dark:text-white">{event.name}</p>
          <p className="text-sm dark:text-gray-300">Sat, Nov 16 • 6:30 AM</p>
          <p className="text-sm line-clamp-2 min-h-[2.5rem] dark:text-gray-300">
            {event.location}
          </p>
          <p className="text-lg font-bold dark:text-white">
            From ${event.ticketTypes[0].price.toFixed(2)}
          </p>
          <span className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventTile;
