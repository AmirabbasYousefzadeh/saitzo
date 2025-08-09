"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "خدمات", href: "/services" },
  { label: "نمونه‌کارها", href: "/portfolio" },
  { label: "بلاگ", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md font-iran">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Saitzo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group text-white font-medium"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-md transition duration-300"
        >
          شروع همکاری
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm text-white px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 pb-2 text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 px-4 py-2 text-center rounded-full bg-cyan-500 hover:bg-cyan-600 font-semibold transition"
          >
            شروع همکاری
          </Link>
        </div>
      )}
    </header>
  );
}
