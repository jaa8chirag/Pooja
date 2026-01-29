import { useEffect, useState, useRef } from "react";
import ReviewSection from "../Components/ReviewSection";

export default function Home() {
  /* ================= DATA ================= */
  const heroSlides = [
    {
      title: "Pooja Mandir",
      subtitle: "Divine Experience ✨",
      desc: "Book pujas, explore temples and experience spirituality.",
      img: "/img/slider1.webp", // landscape for desktop
      imgMobile: "/img/portrait1.webp", // portrait for mobile
    },
    {
      title: "Online Pooja",
      subtitle: "Anywhere Anytime 🙏",
      desc: "Perform sacred rituals from your home with trusted pandits.",
      img: "/img/slider2.webp",
      imgMobile: "/img/portrait2.webp",
    },
    {
      title: "Daily Panchang",
      subtitle: "Aaj ka Shubh Muhurat 📿",
      desc: "Get accurate tithi and muhurat daily.",
      img: "/img/slider3.webp",
      imgMobile: "/img/portrait3.webp",
    },
  ];

  const features = [
    { title: "Book Pujas", description: "Easily book your favorite pujas online.", icon: "🕉️" },
    { title: "Explore Temples", description: "Find temples across India and learn their history.", icon: "🏛️" },
    { title: "Panchang", description: "Check daily panchang and auspicious times.", icon: "📅" },
    { title: "Pind Dan", description: "Perform sacred rituals with guidance.", icon: "🔮" },
  ];

  const testimonials = [
    { name: "Sita Sharma", comment: "Amazing platform, booking pujas has never been easier!", avatar: "/img/images.jpg" },
    { name: "Ramesh Gupta", comment: "I love exploring temples and learning their history here.", avatar: "/img/images1.avif" },
    { name: "Anita Singh", comment: "The astrology tools helped me a lot for my daily decisions.", avatar: "/img/temple.avif" },
  ];

  const events = [
    { title: "Diwali Special Pooja", date: "12 Nov 2026", image: "/img/Diwali.png" },
    { title: "Navratri Celebration", date: "15 Oct 2026", image: "/img/navratri.jpg" },
    { title: "Maha Shivratri", date: "25 Feb 2026", image: "/img/shivratri.avif" },
  ];

  const items = [
    { icon: "🕉️", text: "Trusted by 30 million+ people" },
    { icon: "🔒", text: "100% Secure" },
    { icon: "🏛️", text: "India’s Largest App for Hindu Devotees" },
  ];

  /* ================= HERO SLIDER STATE ================= */
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef();

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Choose image based on device
  const slidesToUse = heroSlides.map(slide => ({
    ...slide,
    img: isMobile ? slide.imgMobile : slide.img,
  }));

  // Infinite loop setup
  const slides = [...slidesToUse, slidesToUse[0]];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 2000); // 3s per slide
    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop jump
  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setTransition(false); // remove transition for instant jump
        setCurrent(0);
      }, 2000); // match transition duration
    } else {
      setTransition(true);
    }
  }, [current, slides.length]);

  return (
    <div>
      <section className="relative h-[75vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <div
          ref={sliderRef}
          className="flex h-full"
          style={{
            width: `${slides.length * 100}vw`,
            transform: `translateX(-${current * 100}vw)`,
            transition: transition ? "transform 1.5s ease-in-out" : "none",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-screen h-full relative flex md:items-center"
            >
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-0"></div>

              {/* Text */}
              <div
                className={`z-10 px-4 sm:px-6 md:px-20
            absolute bottom-6 left-4 md:static md:max-w-xl
            space-y-3 sm:space-y-4`}
              >
                <span className="inline-block px-3 py-1 text-xs sm:text-sm md:text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
                  {slide.subtitle}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Welcome to <br />
                  <span className="text-white">{slide.title}</span>
                </h1>
                <p className="text-orange-100 max-w-xs sm:max-w-md md:max-w-lg">
                  {slide.desc}
                </p>
                <div className="flex gap-3 sm:gap-4">
                  <button className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white rounded-full shadow hover:scale-105 transition">
                    Explore Now
                  </button>
                  <button className="px-4 py-2 sm:px-6 sm:py-3 border text-orange-500 border-orange-300 rounded-full hover:bg-orange-50 transition">
                    Book Pooja
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 sm:gap-3 z-20">
          {slidesToUse.map((_, index) => {
            const isActive = current === index || (current === slides.length - 1 && index === 0);
            return (
              <div key={index} className="w-6 sm:w-8 h-1 sm:h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: isActive ? "100%" : "0%",
                    transition: `width ${isActive ? 3 : 0}s linear`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </section>



      {/* ================= HORIZONTAL SCROLLING ITEMS ================= */}
      <section className="bg-orange-500 overflow-hidden  py-4">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {items.concat(items).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 text-white text-lg font-medium"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            gap: 4rem;
            animation: marquee 8s linear infinite;
          }
        `}</style>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-orange-100 p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-2xl transition text-center">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-orange-50 py-20">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Testimonials
        </h2>
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition">
              <img src={t.avatar} alt={t.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <p className="text-gray-700 mb-3">"{t.comment}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <ReviewSection/>


      {/* ================= EVENTS ================= */}
      <section className="bg-white py-20">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Upcoming Events
        </h2>
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition">
              <img src={e.image} alt={e.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
              <p className="text-gray-600 mb-4">{e.date}</p>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Join Event
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
