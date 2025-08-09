"use client";
import React from "react";
import Image from 'next/image';

function servicesmain() {
  return (
    <div>
      <section
        className="h-[1000px] bg-gradient-to-tr from-blue-950 to-black text-white border-b border-white/10 overflow-hidden"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-28">
            خدمات
          </h2>
          <div className="max-w-lg mx-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-xl flex justify-center">
            <h2 className="w-96 text-center ">
              ما در سایتزو فقط وب‌سایت‌های شرکتی <span className="text-cyan-500">نمی‌سازیم!</span> از سایت‌های شخصی و فروشگاهی گرفته تا نمونه‌کار، رزومه، آموزشی و هر ایده‌ای که در ذهن دارید، ما آماده‌ایم آن را به یک وب‌سایت <span className="text-cyan-500">حرفه‌ای و خلاقانه</span>  تبدیل کنیم.
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default servicesmain
