import { useEffect, useState } from "react";
import ReviewSection from "../Components/ReviewSection";
import SpecialPujas from "../Components/SpecialPujas";
import DevotionalStats from "../Components/DevotionalStats";
import { RightFloatingMenu } from "../Components/RightFloatingMenu";
import HowItWorks from "../Components/HowItWorks";

export default function Home() {
  const rituals = [
    { img: "/img/newImage1.jpg", title: "Sacred Havan", desc: "Purifying Fire Ritual" },
    { img: "/img/newImage2.jpg", title: "Vedic Puja", desc: "Traditional Worship" },
    { img: "/img/newImage4.jpg", title: "Wedding Rituals", desc: "Sacred Union Ceremonies" },
    { img: "/img/newImage3.jpg", title: "Griha Pravesh", desc: "New Beginnings" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rituals.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rituals.length]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-[#fff8ec] flex justify-center px-6 md:px-12 lg:px-16 py-12">
        {/* max-w-7xl ensures it doesn't get too wide on giant monitors */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT CONTENT - 50% width on desktop */}
          <div className="w-full md:w-1/2 flex flex-col">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-6 w-fit">
              ✨ Your Faith Partner
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight font-serif text-[#3b2a1a]">
              Sacred Rituals, <br />
              <span className="text-orange-500">Modern Convenience</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              Book verified Pandits for your sacred ceremonies. We handle everything — from the sacred Samagri to the final Aarti.
            </p>

            {/* Stats - Balanced spacing */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2.5 rounded-xl">👨‍👩‍👧‍👦</div>
                <div>
                  <p className="font-semibold text-lg leading-none">5,000+</p>
                  <p className="text-sm text-gray-500 mt-1">Happy Families</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2.5 rounded-xl">⭐</div>
                <div>
                  <p className="font-semibold text-lg leading-none">4.9★</p>
                  <p className="text-sm text-gray-500 mt-1">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Buttons - Sized for 50/50 layout */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium px-6 lg:px-8 py-3.5 rounded-xl shadow-lg hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap">
                Book Offline Puja
              </button>
              <button className="bg-white text-orange-500 font-medium px-6 lg:px-8 py-3.5 rounded-xl border border-orange-300 shadow-md hover:bg-orange-50 transition-all active:scale-95 whitespace-nowrap">
                Book Online Puja
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE CARD - 50% width on desktop */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px] lg:h-[580px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] group">
            
            {/* Live Indicator */}
            <div className="absolute top-5 left-5 z-40 bg-black/20 backdrop-blur-xl border border-white/30 text-white px-4 py-1.5 rounded-full text-xs flex items-center gap-2">
              <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
              Live Bookings
            </div>

            {/* Image Slider */}
            {rituals.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out
                  ${i === index ? "opacity-100 scale-100 z-20" : "opacity-0 scale-105 z-10"}
                `}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20" />

            {/* Content Overlay - Adjusted for 50% width container */}
            <div className="absolute bottom-6 left-6 right-6 z-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 lg:p-7 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="text-2xl lg:text-3xl font-serif text-white">
                {rituals[index].title}
              </h3>
              <p className="text-sm lg:text-base text-white/90 mt-2 line-clamp-2">
                {rituals[index].desc}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-orange-500/90 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                🔥 Popular Ritual
              </div>
            </div>
          </div>
        </div>

        <RightFloatingMenu />
      </section>

      {/* REMAINDER OF YOUR CONTENT */}

      <SpecialPujas />
      <DevotionalStats />
      <HowItWorks/>
      <ReviewSection />

    </div>
  );
}