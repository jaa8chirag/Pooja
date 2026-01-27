import { useEffect, useState } from "react";

export default function Home() {
  /* ================= DATA ================= */

  const features = [
    { title: "Book Pujas", description: "Easily book your favorite pujas online.", icon: "🕉️" },
    { title: "Explore Temples", description: "Find temples across India and learn their history.", icon: "🏛️" },
    { title: "Panchang", description: "Check daily panchang and auspicious times.", icon: "📅" },
    { title: "Pind Dan", description: "Perform sacred rituals with guidance.", icon: "🔮" },
  ];

  const pujas = [
    { title: "Kaal Sarp Dosha Puja", category: "Dosha", temple: "Trimbakeshwar, Nashik" },
    { title: "Manglik Dosha Nivaran", category: "Marriage", temple: "Ujjain Mahakal" },
    { title: "Navgraha Shanti Puja", category: "Navgraha", temple: "Kashi Vishwanath" },
    { title: "Rudrabhishek", category: "Shiv Puja", temple: "Somnath Temple" },
    { title: "Satyanarayan Katha", category: "Dosha", temple: "Ayodhya Ram Mandir" },
    { title: "Maha Mrityunjaya Jaap", category: "Shiv Puja", temple: "Kashi Vishwanath" },
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

  const heroImages = [
    "/img/temple.avif",
    "/img/Diwali.png",
    "/img/navratri.jpg",
  ];

  const [search, setSearch] = useState("");

  const filteredPujas = pujas.filter((p) =>
    `${p.title} ${p.category} ${p.temple}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  /* ================= SLIDER ================= */

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  /* ================= UI ================= */

  return (
    <div className="bg-orange-200 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-orange-100 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight">
              Welcome to Pooja Mandir 🙏
            </h1>
            <p className="mt-6 text-gray-700 text-lg md:text-xl">
              Book pujas, explore temples, follow panchang, and discover astrology tools easily.
            </p>
            <button className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              Explore Now
            </button>
          </div>

          {/* Slider */}
          <div className="md:w-1/2 relative h-[300px] md:h-[420px] w-full">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Sri Mandir"
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${index === current ? "bg-orange-500" : "bg-orange-200"
                }`}
            />
          ))}
        </div>
      </section>

      {/* ================= SEARCH BAR ================= */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search puja, temple, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full border
        border-orange-500 focus:border-orange-400
        focus:ring-2 focus:ring-orange-200
        outline-none shadow-sm text-gray-700"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-orange-500 text-xl">
              🔍
            </span>
          </div>
        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-orange-50 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
          Testimonials
        </h2>
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-2">"{t.comment}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="bg-white py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
          Upcoming Events
        </h2>
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <img src={e.image} alt={e.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
              <p className="text-gray-600 mb-4">{e.date}</p>
              <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                Join Event
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/img/temple.avif" alt="Sri Mandir" className="rounded-xl shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              About Pooja Mandir
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Pooja Mandir connects devotees with temples, pujas, festivals, and spiritual resources.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Join our community and stay connected with divine experiences anytime, anywhere.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
