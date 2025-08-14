"use client";
import React from "react";
import Image from 'next/image';

function servicesmain() {
  return (
    <div>
      <section
        className="h-[1000px] bg-gradient-to-tr from-blue-950 to-black text-white border-b border-white/10 overflow-hidden pt-32"
      >
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md shadow-white w-[250px] h-16 pr-16 text-center ">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">شرکتی</h2>
          </div>
          <div className="w-1/2 mr-auto" dir="ltr">
            <Image src={"/company.png"} alt="company.png" width={100} height={100} className="ml-8" />
          </div>
        </div>
          <div className="">
            <p className="max-w-4xl ml-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-xl">
              ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
            </p>
          </div>
      </section>
    </div>
  )
}

export default servicesmain