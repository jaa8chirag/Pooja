import { useState } from "react";
import {
    Calendar,
    Heart,
    MapPin,
    BookOpen,
    Sparkles,
    X
} from "lucide-react";

export function RightFloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { icon: Calendar, label: "Panchang" },
        { icon: Heart, label: "Kundli Match" },
        { icon: MapPin, label: "Temple Finder" },
        { icon: BookOpen, label: "Mantra Library" },
    ];

    return (
        <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end space-y-3">
            
            {/* MOBILE TOGGLE BUTTON (Visible only on small screens) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-orange-500 text-white p-3 rounded-full shadow-2xl border-2 border-white animate-bounce-subtle"
            >
                {isOpen ? <X size={24} /> : <Sparkles size={24} />}
            </button>

            {/* MENU CONTAINER */}
            <div className={`
                flex flex-col items-end space-y-3 transition-all duration-300
                ${isOpen ? 'scale-100 opacity-100 translate-x-0' : 'scale-0 opacity-0 translate-x-10 md:scale-100 md:opacity-100 md:translate-x-0'}
            `}>
                
                {/* FREE SERVICES LABEL (Hidden on mobile toggle) */}
                <div className="hidden md:block bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-lg border border-white/30 text-sm font-semibold text-orange-600">
                    Free Services
                </div>

                {items.map(({ icon: Icon, label }) => (
                    <button
                        key={label}
                        className="
                            flex items-center gap-3
                            w-14 h-14 md:w-44 md:h-14
                            p-3 md:pl-3 md:pr-1
                            bg-white/80 backdrop-blur-md
                            rounded-full md:rounded-xl
                            shadow-xl border border-white/40
                            text-[13px] font-medium text-gray-700
                            hover:bg-orange-50 hover:text-orange-600
                            hover:scale-105 md:hover:scale-[1.03]
                            transition-all duration-300
                            group
                        "
                    >
                        {/* ICON */}
                        <div className="
                            shrink-0
                            w-8 h-8 md:w-9 md:h-9
                            bg-orange-100
                            rounded-full md:rounded-lg
                            flex items-center justify-center
                            group-hover:bg-orange-500 group-hover:text-white
                            transition-colors
                        ">
                            <Icon size={18} className="text-orange-500 group-hover:text-white" />
                        </div>

                        {/* LABEL (Hidden on mobile) */}
                        <span className="hidden md:block">
                            {label}
                        </span>

                        {/* TOOLTIP (Visible only on mobile icons when menu is open) */}
                        <span className="md:hidden absolute right-16 bg-gray-800 text-white px-2 py-1 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}