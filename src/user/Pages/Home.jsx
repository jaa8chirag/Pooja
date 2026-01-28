import { useEffect, useState } from "react";

export default function Home() {

  /* ================= DATA ================= */

  const heroImages = [
    "/img/temple.avif",
    "/img/newImage1.jpg",
    "/img/newImage2.jpg",
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

  /* ================= HERO INTERACTION ================= */

  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const items = [
    { icon: "🕉️", text: "Trusted by 30 million+ people" },
    { icon: "🔒", text: "100% Secure" },
    { icon: "🏛️", text: "India’s Largest App for Hindu Devotees" },
  ];

  /* ================= UI ================= */

  return (
    <div className="bg-orange-200 min-h-screen">

      {/* ================= HERO ================= */}
<section
  onMouseMove={handleMouseMove}
  className="relative min-h-[92vh] md:min-h-[82vh] bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden"
>
  {/* Cursor-follow light */}
  <div
    className="absolute pointer-events-none w-[500px] h-[500px] bg-orange-400/25 rounded-full blur-3xl transition-transform duration-100"
    style={{
      transform: `translate(${mouse.x - 250}px, ${mouse.y - 250}px)`
    }}
  />

  <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-24 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* TEXT */}
    <div className="space-y-6 text-center md:text-left z-10">
      <span className="inline-block px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
        Divine Experience ✨
      </span>

      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
        Welcome to <br />
        <span className="text-orange-500">Pooja Mandir</span> 🙏
      </h1>

      <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
        Book pujas, explore sacred temples, check daily panchang,
        and experience spirituality in a modern way.
      </p>

      <div className="flex gap-4 justify-center md:justify-start">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-xl hover:scale-105 transition">
          Explore Now
        </button>
        <button className="px-6 py-3 border border-orange-300 rounded-full hover:bg-orange-50 transition">
          Book Pooja
        </button>
      </div>
    </div>

    {/* IMAGE SLIDER */}
    <div className="relative h-[300px] sm:h-[380px] md:h-[350px] w-full">
      {heroImages.map((img, index) => {
        const offset = index - current;

        return (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
            style={{
              transform: `
                translateX(${offset * 30}px)
                translateY(${offset * 20}px)
                scale(${index === current ? 1 : 0.92})
              `,
              zIndex: heroImages.length - Math.abs(offset),
              opacity: Math.abs(offset) > 2 ? 0 : 1
            }}
          >
            <div className="absolute w-[80%] h-[80%] bg-orange-400/30 blur-[100px] rounded-full" />

            <img
              src={img}
              alt="Pooja Mandir"
              className="w-[85%] h-[85%] object-cover"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 78%)",
              }}
            />
          </div>
        );
      })}
    </div>
  </div>

  {/* DOTS */}
  <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`transition-all ${
          index === current
            ? "w-8 h-2 bg-orange-500 rounded-full"
            : "w-2 h-2 bg-orange-300 rounded-full"
        }`}
      />
    ))}
  </div>
</section>



      {/* ================= Horizonal sliding window ================= */}
      <section className="bg-orange-500 overflow-hidden py-4">
        <div className="relative">
          {/* Track container */}
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

        {/* Animation CSS */}
        <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 4rem;
          animation: marquee 10s linear infinite;
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
