import React, { useState } from "react";

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
  image: "https://images.unsplash.com/photo-1588591795082-5d76c3b06baf",
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
  badge: "Highly Rated",
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
    image: "https://images.unsplash.com/photo-1608889175250-c3b0c1667d43",
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
    image: "https://images.unsplash.com/photo-1524492514790-2a0bda15bb93",
  },
  {
    title: "Rudrabhishek",
    temple: "Somnath Temple",
    category: "Shiv Puja",
    date: "Monday",
    rating: 4.6,
    reviews: 76,
    price: "₹1100",
    image: "https://images.unsplash.com/photo-1593692716621-1c8f1d55d26d",
  },
];

export default function Puja() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-orange-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-300 text-white py-20 px-6 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">
          Perform Pujas & Remedies in Famous Hindu Temples
        </h1>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Book authentic pujas performed by verified pandits across India
        </p>
      </section>

      {/* ================= FILTER BAR ================= */}
<div className="bg-white flex justify-center sticky top-16 z-20 shadow-sm border-b border-orange-100">
  <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 text-sm overflow-x-auto">
    {["All", "Dosha", "Marriage", "Shiv Puja", "Navgraha"].map((item) => (
      <button
        key={item}
        onClick={() => setActiveFilter(item)}
        className={
          activeFilter === item
            ? "text-orange-600 font-semibold border-b-2 border-orange-500 pb-1 whitespace-nowrap"
            : "text-gray-600 hover:text-orange-500 font-medium transition whitespace-nowrap"
        }
      >
        {item}
      </button>
    ))}
  </div>
</div>


      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-8 text-orange-600">
          {activeFilter === "All" ? "All Pujas" : `${activeFilter} Pujas`}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl hover:bg-orange-100 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs px-3 py-1 rounded-full shadow">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-xs font-medium text-orange-500">
                  {service.category}
                </span>

                <h3 className="mt-1 font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {service.temple}
                </p>

                {/* Date & Rating */}
                <div className="flex items-center justify-between mt-3 text-xs">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-lg font-medium">
                    {service.date}
                  </span>

                  <span className="text-yellow-400 font-semibold">
                    ★ {service.rating} ({service.reviews})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    {service.price}
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-full shadow transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No services found.
          </p>
        )}
      </section>
    </div>
  );
}
