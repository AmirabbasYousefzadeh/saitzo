"use client";

import React from "react";
import { CheckCircle, MonitorSmartphone, RefreshCw, Rocket, Cpu, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "طراحی اختصاصی و حرفه‌ای",
    desc: "هر پروژه بر اساس نیازهای خاص شما طراحی می‌شود، بدون استفاده از قالب‌های آماده.",
    icon: <MonitorSmartphone className="text-cyan-500" size={32} />,
  },
  {
    title: "پشتیبانی مداوم و پاسخ‌گو",
    desc: "ما فقط طراح سایت نیستیم، شریک رشد کسب‌وکار شما هستیم.",
    icon: <RefreshCw className="text-cyan-500" size={32} />,
  },
  {
    title: "تجربه کاری و نمونه‌کارهای موفق",
    desc: "با تجربه در پروژه‌های گوناگون، عملکرد و اعتماد را تضمین می‌کنیم.",
    icon: <Users className="text-cyan-500" size={32} />,
  },
  {
    title: "بهینه‌سازی برای سرعت و سئو",
    desc: "وب‌سایت‌هایی سریع، واکنش‌گرا و سئو شده تحویل می‌دهیم.",
    icon: <Rocket className="text-cyan-500" size={32} />,
  },
  {
    title: "استفاده از تکنولوژی‌های روز",
    desc: "با React، Next.js، TailwindCSS و دیگر ابزارهای به‌روز، سایت‌هایی مدرن می‌سازیم.",
    icon: <Cpu className="text-cyan-500" size={32} />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-950 to-black text-white border-b-[1px] border-[#FFFFFF20]" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          چرا ما؟
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 bg-[#FFFFFF10] p-6 rounded-2xl shadow-md"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
