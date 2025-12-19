"use client";
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Header from "./header";

// Guard for localStorage access (prevents SSR issues)
const useClientSide = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
};

const messages = [
  "طراحی وب‌سایت‌های مدرن و واکنش‌گرا",
  "برنامه‌نویسی تخصصی با Python و JavaScript",
  "پروژه‌های هوش مصنوعی و دیتا ساینس",
  "توسعه فرانت‌اند با React، Next.js و TailwindCSS",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 3000); // زمان نمایش هر پیام (تایپ و مکث)
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center font-iran"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="bg-black/70 w-full h-full flex flex-col items-center justify-center text-white text-center px-6" dir="rtl">
        <Header />
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Saitzo</h1>

        <div className="text-xl md:text-2xl font-medium space-y-4 min-h-[200px]">
          {messages.slice(0, currentIndex + 1).map((msg, index) => (
            <div key={index}>
              {index === currentIndex ? (
                <Typewriter
                  words={[msg]}
                  typeSpeed={50}
                  cursor
                  cursorStyle="|"
                />
              ) : (
                <span>{msg}</span>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          مشاهده نمونه کارها
        </Link>
      </div>
    </section>
  );
}
