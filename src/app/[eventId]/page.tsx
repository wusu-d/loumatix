"use client";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../components/select";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { useEvent } from "@/context/EventContext";
import { useEffect } from "react";
import { events } from "@/lib/events";
import { useRouter, usePathname } from "next/navigation";
import FadeIn from "../components/FadeIn";

const EventDetailPage = () => {
  const {
    selectedEvent,
    setSelectedEvent,
    ticketQuantities,
    setTicketQuantities,
  } = useEvent();
  const router = useRouter();
  const pathname = usePathname();

  const calculateTotal = () => {
    return (
      selectedEvent?.ticketTypes.reduce((total, ticket) => {
        const quantity =
          ticketQuantities[ticket.name as keyof typeof ticketQuantities];
        return total + ticket.price * quantity;
      }, 0) || 0
    );
  };

  const handleQuantityChange = (ticketType: string, quantity: string) => {
    setTicketQuantities((prev) => ({
      ...prev,
      [ticketType]: parseInt(quantity),
    }));
  };

  useEffect(() => {
    if (!selectedEvent) {
      const eventId = pathname.split("/")[1];
      const event = events.find((e) => e.id === parseInt(eventId));
      if (event) {
        setSelectedEvent(event);
      } else {
        router.push("/");
      }
    }
  }, [pathname, selectedEvent, setSelectedEvent, router]);

  if (!selectedEvent) return null;

  return (
    <main>
      <div className="mx-auto max-w-screen-xl py-6 md:py-12">
        <FadeIn delay={200}>
          <div className="relative h-[300px] md:h-[500px]">
            <div
              style={{
                backgroundImage: `url(${selectedEvent.image})`,
              }}
              className="absolute inset-0 bg-cover bg-center blur-xl opacity-50"
            ></div>
            <div className="max-w-screen-lg mx-auto z-50 px-4 md:px-0">
              <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={selectedEvent.image}
                  fill
                  alt={selectedEvent.name}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="mt-6 md:mt-10 px-4 md:px-20">
            <h2 className="text-2xl md:text-3xl font-bold">
              {selectedEvent.name}
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mt-2">
              <span className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4 md:w-5 md:h-5" />
                {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5" />
                {selectedEvent.location}
              </span>
            </div>
            <div className="mt-6 md:mt-8">{selectedEvent.description}</div>
            <div className="mt-6 md:mt-8">
              <h3 className="font-semibold text-lg md:text-xl">
                Select Tickets
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold">Regular</span>
                    <span className="">
                      $
                      {selectedEvent.ticketTypes
                        .find((t) => t.name === "Regular")
                        ?.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-[200px]">
                    <Select
                      onValueChange={(value) =>
                        handleQuantityChange("Regular", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold">VIP</span>
                    <span className="">
                      $
                      {selectedEvent.ticketTypes
                        .find((t) => t.name === "VIP")
                        ?.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-[200px]">
                    <Select
                      onValueChange={(value) =>
                        handleQuantityChange("VIP", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold">Backstage</span>
                    <span className="">
                      $
                      {selectedEvent.ticketTypes
                        .find((t) => t.name === "Backstage")
                        ?.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-[200px]">
                    <Select
                      onValueChange={(value) =>
                        handleQuantityChange("Backstage", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <div className="px-4 md:px-20 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-6 md:mt-10">
            <p className="font-bold">
              Total:{" "}
              <span className="text-xl md:text-2xl">
                ${calculateTotal().toFixed(2)}
              </span>
            </p>
            <Link
              href={`/${selectedEvent.id}/checkout`}
              className="w-full md:w-auto"
            >
              <Button
                className="text-white w-full md:w-auto"
                disabled={calculateTotal() === 0}
              >
                Reserve a spot
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
};

export default EventDetailPage;
