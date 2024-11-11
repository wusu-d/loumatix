import EventList from "./components/EventList";
import Image from "next/image";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <main>
        <FadeIn>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <FadeIn delay={200}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Discover Amazing Events
                  </h1>
                </FadeIn>
                <FadeIn delay={400}>
                  <p className="text-lg md:text-xl text-gray-600">
                    Looking for something to do? Whether you&apos;re a local,
                    new in town or just cruising through we&apos;ve got loads of
                    great tips and events
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={600} className="flex-1">
                <div className="relative hidden lg:block lg:h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg"
                    alt="People enjoying a concert event"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </main>
      <FadeIn delay={800}>
        <EventList />
      </FadeIn>
    </>
  );
}
