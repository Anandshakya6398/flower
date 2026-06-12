import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Flower2,
  Search,
  User,
  ShoppingCart,
} from "lucide-react";

const navLinks = [
  { name: "Categories", path: "/category" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
  { name: "About Us", path: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
        FOR SAME DAY DELIVERY, PLEASE CALL/WHATSAPP ON 91XXXXXXXX →
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-md">
            <Flower2 size={20} className="text-white" />
          </div>

          <div className="leading-none">
            <p className="font-serif text-sm font-semibold text-gray-700">
              bring my
            </p>
            <h1 className="font-serif text-xl font-bold text-rose-500">
              flowers
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-semibold text-gray-700 hover:text-rose-500 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600 hover:text-rose-500 transition-colors">
            <Search size={22} />
          </button>

          <button className="p-2 text-gray-600 hover:text-rose-500 transition-colors">
            <User size={22} />
          </button>

          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-rose-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
            <ShoppingCart size={16} />
            CART
          </button>
        </div>
      </div>
    </nav>
  );
}