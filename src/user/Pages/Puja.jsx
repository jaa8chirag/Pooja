import React from "react";
import { Star, MapPin, Calendar, ArrowRight, Filter, Search } from "lucide-react";

const services = [
  {
    title: "Satyanarayan Katha",
    temple: "Ayodhya Ram Mandir",
    category: "Dosha",
    date: "Thursday",
    rating: 4.9,
    reviews: 180,
    price: "₹1500",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    badge: "Popular",
  },
  {
    title: "Griha Pravesh Puja",
    temple: "Haridwar",
    category: "Marriage",
    date: "Auspicious Day",
    rating: 4.7,
    reviews: 92,
    price: "₹4100",
    image: "https://i.pinimg.com/736x/f4/7f/a6/f47fa60b150368934020c210c8c49d0d.jpg",
  },
  {
    title: "Maha Mrityunjaya Jaap",
    temple: "Kashi Vishwanath",
    category: "Shiv Puja",
    date: "Monday",
    rating: 5.0,
    reviews: 256,
    price: "₹5100",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    badge: "Highly Rated"
  },
  {
    title: "Rahu–Ketu Shanti Puja",
    temple: "Srikalahasti",
    category: "Navgraha",
    date: "Next Week",
    rating: 4.6,
    reviews: 110,
    price: "₹2700",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
  },
  {
    title: "Kaal Sarp Dosha Puja",
    temple: "Trimbakeshwar, Nashik",
    category: "Dosha",
    date: "Tomorrow",
    rating: 4.8,
    reviews: 124,
    price: "₹2100",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    badge: "Most Booked",
  },
  {
    title: "Manglik Dosha Nivaran",
    temple: "Ujjain Mahakal",
    category: "Marriage",
    date: "Amavasya",
    rating: 4.7,
    reviews: 98,
    price: "₹2500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIc1BqS_aDmS26-3x3JSSotU2p0Dr2InktA&s",
    badge: "Recommended",
  },
  {
    title: "Navgraha Shanti Puja",
    temple: "Kashi Vishwanath",
    category: "Navgraha",
    date: "This Week",
    rating: 4.9,
    reviews: 210,
    price: "₹3100",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4BqbvT9jy2Jgqr3gQY-Q9bWELVO3eyyS6A&s",
  },
  {
    title: "Rudrabhishek",
    temple: "Somnath Temple",
    category: "Shiv Puja",
    date: "Monday",
    rating: 4.6,
    reviews: 76,
    price: "₹1100",
    image: "https://static.wixstatic.com/media/6642a4_8930a82d27434739a6aeaf5fc2d4e2fe~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6642a4_8930a82d27434739a6aeaf5fc2d4e2fe~mv2.jpg",
  },

];

export default function Puja() {
  return (
    <div className="min-h-screen bg-[#fffcf7]">
      {/* ================= HERO ================= */}
      <section className="relative bg-[#fff8ec] py-24 px-6 overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 -ml-32 -mb-32"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Divine Ceremonies
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#3b2a1a] leading-tight">
            Sacred Rituals & <br />
            <span className="text-orange-500 italic">Temple Pujas</span>
          </h1>
          <p className="mt-8 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Experience the divine through authentic Vedic rituals performed by verified priests at India’s holiest shrines.
          </p>
        </div>
      </section>

      {/* ================= STATIC SEARCH & FILTER UI ================= */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white/80 backdrop-blur-2xl p-4 rounded-[32px] shadow-2xl shadow-orange-200/20 border border-white">
          <div className="flex flex-col lg:flex-row gap-4">

            {/* Search Input Box */}
            <div className="relative flex-1">
              {/* CLEAR ICON */}
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-500"
                size={20}
              />

              {/* CLEAN, VISIBLE INPUT */}
              <input
                type="text"
                placeholder="Search for Temple, God or Dosha..."
                className="w-full pl-14 pr-6 py-5 bg-white border-2 border-orange-400 rounded-2xl 
               text-[#3b2a1a] font-semibold text-lg
               placeholder:text-gray-300
               focus:outline-none focus:border-orange-600 focus:shadow-lg focus:shadow-orange-100 
               transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES GRID UI ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-serif text-[#3b2a1a]">Explore Services</h2>
            <div className="w-16 h-1.5 bg-orange-500 mt-4 rounded-full"></div>
          </div>
          <p className="text-gray-400 font-medium text-sm">Showing all {services.length} sacred ceremonies</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-[40px] border-[1.5px] border-orange-100 shadow-sm hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {service.badge && (
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#3b2a1a]">{service.badge}</p>
                  </div>
                )}
              </div>

              {/* Text Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.15em]">{service.category}</span>
                </div>

                <h3 className="font-serif text-xl text-[#3b2a1a] leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <div className="flex items-start gap-2 text-gray-400 mb-6">
                  <MapPin size={14} className="mt-0.5 text-orange-300" />
                  <p className="text-xs font-medium leading-relaxed uppercase tracking-tight">{service.temple}</p>
                </div>

                {/* Info Bar */}
                <div className="flex items-center justify-between py-4 border-y border-orange-50 text-[11px] font-bold text-[#3b2a1a]">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-orange-500" />
                    {service.date}
                  </div>
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                    <span className="text-orange-500">★</span> {service.rating}
                  </div>
                </div>

                {/* Footer / Price Section */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Dakshina</span>
                    <span className="text-2xl font-bold text-[#3b2a1a]">{service.price}</span>
                  </div>

                  <button className="bg-[#3b2a1a] text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-orange-600 hover:w-32 transition-all duration-500 group/btn overflow-hidden relative shadow-lg">
                    <span className="absolute left-4 opacity-0 group-hover/btn:opacity-100 transition-opacity font-bold text-xs whitespace-nowrap">Book Puja</span>
                    <ArrowRight size={20} className="absolute right-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}