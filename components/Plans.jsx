"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const plansData = {
  "شرکتی": [
    {
      title: "جهش",
      en: "Leap",
      desc: "مناسب برای پروژه های شرکتی بزرگ و پیشرفته",
      features: [
        { icon: "/coding.png", text: "طراحی نامحدود صفحات" },
        { icon: "/responsive.png", text: "طراحی اختصاصی سطح‌بالا با انیمیشن" },
        { icon: "/support.png", text: "پشتیبانی کامل تا ۳ ماه" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
        { icon: "/seo.png", text: "سئو پیشرفته و آنالیز اولیه" },
        { icon: "/rocket.png", text: "بهینه‌سازی عملکرد و سرعت" },
        { icon: "/cms.png", text: "سیستم مدیریت محتوا (CMS)" },
      ],
    },
    {
      title: "حرفه‌ای",
      en: "Pro",
      desc: "مناسب برای پروژه های شرکتی با امکانات",
      features: [
        { icon: "/coding.png", text: "طراحی چندصفحه‌ای (تا ۵ صفحه)" },
        { icon: "/responsive.png", text: "طراحی کاملاً اختصاصی و ریسپانسیو" },
        { icon: "/support.png", text: "پشتیبانی کامل تا ۱ ماه" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
        { icon: "/seo.png", text: "سئو پایه برای گوگل" },
        { icon: "/rocket.png", text: "سرعت بهینه‌شده" },
      ],
    },
    {
      title: "پایه",
      en: "Base",
      desc: "مناسب برای پروژه های شرکتی ساده و کوچک",
      features: [
        { icon: "/coding.png", text: "طراحی یک صفحه‌ای" },
        { icon: "/responsive.png", text: "طراحی واکنش‌گرا" },
        { icon: "/support.png", text: "پشتیبانی اولیه" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
      ],
    },
  ],
  "فروشگاهی": [
    {
      title: "جهش",
      en: "Leap",
      desc: "مناسب برای فروشگاه اینترنتی بزرگ و پیشرفته",
      features: [
        { icon: "/coding.png", text: "طراحی نامحدود صفحات" },
        { icon: "/responsive.png", text: "طراحی اختصاصی سطح‌بالا با انیمیشن" },
        { icon: "/support.png", text: "پشتیبانی کامل تا ۳ ماه" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
        { icon: "/supply-chain.png", text: "محصولات نامحدود" },
        { icon: "/payment-method.png", text: "درگاه پرداخت آنلاین" },
        { icon: "/administrator.png", text: "مدیریت سفارش پیشرفته" },
      ],
    },
    {
      title: "حرفه‌ای",
      en: "Pro",
      desc: "مناسب برای فروشگاه اینترنتی با امکانات",
      features: [
        { icon: "/coding.png", text: "طراحی چندصفحه‌ای (تا ۵ صفحه)" },
        { icon: "/responsive.png", text: "طراحی کاملاً اختصاصی و ریسپانسیو" },
        { icon: "/support.png", text: "پشتیبانی کامل تا ۱ ماه" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
        { icon: "/supply-chain.png", text: "تا ۱۰۰ محصول" },
        { icon: "/payment-method.png", text: "درگاه پرداخت آنلاین" },
      ],
    },
    {
      title: "پایه",
      en: "Base",
      desc: "مناسب برای فروشگاه اینترنتی ساده و کوچک",
      features: [
        { icon: "/coding.png", text: "طراحی یک صفحه‌ای" },
        { icon: "/responsive.png", text: "طراحی واکنش‌گرا" },
        { icon: "/support.png", text: "پشتیبانی اولیه" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
        { icon: "/supply-chain.png", text: "تا ۱۰ محصول" },
      ],
    },
  ],
  "شخصی": [
    {
      title: "جهش",
      en: "Leap",
      desc: "پورتفولیو پیشرفته شخصی",
      features: [
        { icon: "/coding.png", text: "طراحی نامحدود صفحات" },
        { icon: "/responsive.png", text: "طراحی اختصاصی سطح‌بالا با انیمیشن" },
        { icon: "/seo.png", text: "سئو پیشرفته و آنالیز اولیه" },
      ],
    },
    {
      title: "حرفه‌ای",
      en: "Pro",
      desc: "پورتفولیو حرفه‌ای شخصی",
      features: [
        { icon: "/coding.png", text: "طراحی چندصفحه‌ای (تا ۳ صفحه)" },
        { icon: "/responsive.png", text: "طراحی کاملاً اختصاصی و ریسپانسیو" },
      ],
    },
    {
      title: "پایه",
      en: "Base",
      desc: "پورتفولیو ساده شخصی",
      features: [
        { icon: "/coding.png", text: "طراحی یک صفحه‌ای" },
        { icon: "/responsive.png", text: "طراحی واکنش‌گرا" },
      ],
    },
  ],
  "نوبت‌دهی": [
    {
      title: "جهش",
      en: "Leap",
      desc: "سیستم نوبت‌دهی پیشرفته",
      features: [
        { icon: "/calendar.png", text: "تقویم آنلاین پیشرفته" },
        { icon: "/notification.png", text: "اعلان پیامکی" },
        { icon: "/payment-method.png", text: "درگاه پرداخت آنلاین" },
        { icon: "/administrator (2).png", text: "مدیریت مشتری" },
      ],
    },
    {
      title: "حرفه‌ای",
      en: "Pro",
      desc: "سیستم نوبت‌دهی استاندارد",
      features: [
        { icon: "/calendar.png", text: "تقویم آنلاین ساده" },
        { icon: "/notification.png", text: "اعلان پیامکی" },
      ],
    },
    {
      title: "پایه",
      en: "Base",
      desc: "نوبت‌دهی ساده",
      features: [
        { icon: "/calendar.png", text: "رزرو دستی" },
        { icon: "/social-media.png", text: "اتصال به شبکه های اجتماعی" },
      ],
    },
  ],
  "منوی دیجیتال": [
    {
      title: "جهش",
      en: "Leap",
      desc: "منوی دیجیتال حرفه‌ای",
      features: [
        { icon: "/restaurantMenu.png", text: "محصول نامحدود" },
        { icon: "/SaitzoQRCode.png", text: "QR Code اختصاصی" },
        { icon: "/menu.png", text: "تصاویر محصول" },
        { icon: "/languages.png", text: "منوی چندزبانه" },
      ],
    },
    {
      title: "حرفه‌ای",
      en: "Pro",
      desc: "منوی دیجیتال با امکانات",
      features: [
        { icon: "/restaurantMenu.png", text: "محصول نامحدود" },
        { icon: "/SaitzoQrCode.png", text: "QR Code عمومی" },
        { icon: "/menu.png", text: "تصاویر محصول" },
      ],
    },
    {
      title: "پایه",
      en: "Base",
      desc: "منوی ساده دیجیتال",
      features: [
        { icon: "/restaurantMenu.png", text: "محصول نامحدود" },
        { icon: "/SaitzoQrCode.png", text: "QR Code عمومی" },
      ],
    },
  ],
}

function Plans() {
  const [activeCategory, setActiveCategory] = useState("شرکتی")

  return (
    <section className="bg-gradient-to-tr from-blue-950 to-black text-white py-20 px-6 border-t border-white/10" dir="rtl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        کدوم پلن مناسب شماست؟
      </h2>

      {/* Sidebar */}
      <div className='w-[800px] h-20 rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid text-white border-white/10 mx-auto flex'>
        {Object.keys(plansData).map((category, index) => (
          <div
            key={category}
            className={`${index === Object.keys(plansData).length - 1 ? "" : "border-l border-l-white/10"}`}
          >
            <button
              onClick={() => setActiveCategory(category)}
              className={`w-[160px] h-20 cursor-pointer duration-300
                ${activeCategory === category
                  ? "bg-white text-black font-bold"   // 🔥 active state
                  : "hover:opacity-80"}
                ${index === 0 ? "rounded-r-2xl" : ""}
                ${index === Object.keys(plansData).length - 1 ? "rounded-l-2xl" : ""}
              `}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      {/* Plans */}
      <div className='flex justify-center items-center mt-10' dir='ltr'>
        {plansData[activeCategory].map((plan) => (
          <div
            key={plan.title}
            className='w-80 rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white border-white/10 px-5 py-5 h-[440px]'
            dir='rtl'
          >
            <div className='text-3xl font-bold mb-3 flex w-full'>
              <div className='w-1/2 pr-1'>
                <p>{plan.title}</p>
              </div>
              <div dir='ltr' className='w-1/2 pl-1'>
                <span>{plan.en}</span>
              </div>
            </div>
            <p className="text-sm px-3 font-bold">{plan.desc}</p>
            <div className='text-center mb-5'>
              <button className="duration-200 mt-4 px-24 py-2 text-white rounded-2xl hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white cursor-pointer">
                انتخاب پلن
              </button>
            </div>
            <ul className="text-sm space-y-2 leading-6 px-3">
              {plan.features.map((feature, idx) => (
                <div key={idx} className='flex'>
                  <Image src={feature.icon} alt='icon' width={25} height={25} className='ml-2' />
                  <li>{feature.text}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans



