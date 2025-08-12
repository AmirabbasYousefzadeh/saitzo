"use client";
import React from "react";
import Image from 'next/image';

function servicesmain() {
  return (
    <div>
      <section
        className="h-[1000px] bg-gradient-to-tr from-blue-950 to-black text-white overflow-hidden"
      >
        <div className=" pb-5 border-b border-[#FFFFFF20] ">
          <h2 className="text-3xl md:text-[40px] font-bold text-center mb-6 mt-28">
            خدمات
          </h2>
          <div className="max-w-md mx-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-xl flex justify-center">
            <h2 className="w-96 text-center ">
              ما در سایتزو فقط وب‌سایت‌های شرکتی <span className="text-cyan-500">نمی‌سازیم! <br /></span> از سایت‌های شخصی و فروشگاهی گرفته تا نمونه‌کار، رزومه، آموزشی و هر ایده‌ای که در ذهن دارید، ما آماده‌ایم آن را به یک وب‌سایت <span className="text-cyan-500">حرفه‌ای و خلاقانه</span>  تبدیل کنیم.
            </h2>
          </div>
        </div>
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md     shadow-white w-[250px] h-16 pr-16 text-center mt-28">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">شرکتی</h2>
          </div>
          <div className="my-auto mx-auto mt-80 ml-36">
            <Image src={"/company.png"} alt="company.png" width={100} height={100} />
          </div>
          <div>
            <p className="max-w-md mx-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-xl">
              ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default servicesmain
