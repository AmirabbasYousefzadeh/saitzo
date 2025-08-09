"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      dir="rtl"
      className="relative py-24 px-6 bg-gradient-to-tr from-blue-950 to-black text-white border-b border-white/10 overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-50px] -z-10" />

      <div className="max-w-4xl mx-auto text-center bg-[#FFFFFF10] py-[50px] px-[30px] rounded-xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          درباره ما
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-cyan-500 mx-auto mb-10 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Text content */}
        <motion.p
          className="text-gray-300 md:text-xl leading-loose"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          در دنیایی که سرعت، خلاقیت و تکنولوژی حرف اول را می‌زند،{" "}
          <span className="text-cyan-400 font-semibold">سایتزو</span> جاییست که
          ایده‌های شما زنده می‌شود. ما آمده‌ایم تا تجربه‌ای نو از دنیای طراحی
          وب بسازیم — با طراحی هوشمند، عملکرد بی‌نقص و دیدی متفاوت.
          <br />
          <br />
          چه به دنبال ساخت یک برند باشید، چه خلق یک پلتفرم، یا تنها به دنبال
          الهام گرفتن،{" "}
          <span className="text-cyan-400 font-semibold">سایتزو</span> کنار شماست.
          <br />
          <span className="text-cyan-400 font-bold">
            با ما آینده را همین امروز شروع کنید.
          </span>
        </motion.p>
      </div>
    </section>
  );
}