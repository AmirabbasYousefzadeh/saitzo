"use client";
import Link from "next/link";
import React from "react";
import Image from 'next/image';

function servicesmain() {
  return (
    <div>
      <section
        className="h-[1800px] bg-gradient-to-tr from-blue-950 to-black text-white border-b border-white/10 overflow-hidden pt-32"
      >
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md shadow-white w-[250px] h-16 text-center ">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">شرکتی</h2>
          </div>
        </div>
        <div className="px-12 flex py-12" dir="ltr">
          <div className="w-48 h-48 border rounded-xl bg-[#FFFFFF10]">
            <button>پلن ها</button>
            <button>سوالات متداول</button>
            <button>تماس با ما</button>
          </div>
          <div className="w-1/2 ml-80 flex items-center" dir="ltr">
            <Image src={"/company.png"} alt="company.png" width={100} height={100} className="ml-8 bg-[#FFFFFF10] px-4 py-8 rounded-l-xl" />
          </div>
          <p className="max-w-2xl ml-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-r-xl">
            ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
          </p>
        </div>
        <section className="border-t border-white/10 mb-9"></section>
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md shadow-white w-[250px] h-16 text-center ">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">فروشگاهی</h2>
          </div>
        </div>
        <div className="px-12 flex py-12" dir="ltr">
          <div className="w-1/2 mr-auto px-12 flex items-center" dir="ltr">
            <Image src={"/Store.png"} alt="Store.png" width={100} height={100} className="ml-8 bg-[#FFFFFF10] px-4 py-8 rounded-l-xl" />
          </div>
          <p className="max-w-2xl ml-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-r-xl">
            ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
          </p>
        </div>
        <section className="border-t border-white/10 mb-9"></section>
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md shadow-white w-[250px] h-16 text-center ">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">شخصی</h2>
          </div>
        </div>
        <div className="px-12 flex py-12" dir="ltr">
          <div className="w-1/2 mr-auto px-12 flex items-center" dir="ltr">
            <Image src={"/personal.png"} alt="personal.png" width={100} height={100} className="ml-8 bg-[#FFFFFF10] px-4 py-8 rounded-l-xl" />
          </div>
          <p className="max-w-2xl ml-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-r-xl">
            ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
          </p>
        </div>
        <section className="border-t border-white/10 mb-9"></section>
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md shadow-white w-[250px] h-16 text-center ">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">نوبت‌دهی</h2>
          </div>
        </div>
        <div className="px-12 flex py-12" dir="ltr">
          <div className="w-1/2 mr-auto px-12 flex items-center" dir="ltr">
            <Image src={"/turn.png"} alt="turn.png" width={100} height={100} className="ml-8 bg-[#FFFFFF10] px-4 py-8 rounded-l-xl" />
          </div>
          <p className="max-w-2xl ml-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-r-xl">
            ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
          </p>
        </div>
        <section className="border-t border-white/10 mb-9"></section>
        <div className="flex">
          <div className="border-white border-2 border-r-0 rounded-l-xl shadow-md shadow-white w-[250px] h-16 text-center ">
            <h2 className="text-3xl md:text-3xl font-bold mt-3">منوی دیجیتال</h2>
          </div>
        </div>
        <div className="px-12 flex py-12" dir="ltr">
          <div className="w-1/2 mr-auto px-12 flex items-center" dir="ltr">
            <Image src={"/menu.png"} alt="menu.png" width={100} height={100} className="ml-8 bg-[#FFFFFF10] px-4 py-8 rounded-l-xl" />
          </div>
          <p className="max-w-2xl ml-auto text-center bg-[#FFFFFF10] py-[20px] px-[30px] rounded-r-xl">
            ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند برای شرکت‌ها طراحی می‌کنیم تا حضور آنلاین شما را به یک مزیت رقابتی تبدیل کنیم. از طراحی اختصاصی و واکنش‌گرا گرفته تا بهینه‌سازی برای موتورهای جستجو (SEO) و پیاده‌سازی امکانات اختصاصی، همه‌چیز را با بالاترین کیفیت انجام می‌دهیم تا برند شما بدرخشد و مشتریان بیشتری جذب کنید.
          </p>
        </div>
      </section>
      <div className="px-1 py-12 w-full bg-gradient-to-br from-blue-950 to-black border-t-[1px] border-[#FFFFFF20] flex h-[300px]" dir="rtl">
        <div className="w-[300px] h-full">
          <div className="my-auto px-9" dir="rtl">
            <Image src={"/SLogo.png"} alt="SaitzoS.png" width={100} height={200} className="mb-2 mr-11" />
            <div className="text-white text-[50px] font-bold text-center ml-8">
              Saitzo
            </div>
          </div>
        </div>
        <div className="leading-9 mr-4 mt-5 text-white">
          <p className="text-xl">با سایتزو</p>
          <div className="w-[66px] h-1 bg-cyan-500 mx-auto mb-3 rounded-full mt-1"></div>
          <Link href={"#"} className="opacity-60 mt-10">نمونه کارها</Link>
          <br />
          <Link href={"#"} className="opacity-60">درباره ما</Link>
          <br />
          <Link href={"#"} className="opacity-60"></Link>
          <Link href={"/services"} className="opacity-60">خدمات</Link>
        </div>
        <div className="leading-9 mr-20 mt-5 text-white">
          <p className="text-xl ">پشتیبانی</p>
          <div className="w-[66px] h-1 bg-cyan-500 mx-auto mb-3 rounded-full ml-20 mt-1"></div>
          <Link href={"#"} className="opacity-60 mt-10">پاسخ به سوالات</Link>
          <br />
          <Link href={"#"} className="opacity-60">تماس با ما</Link>
          <br />
          <Link href={"#"} className="opacity-60">ایمیل</Link>
        </div>
        <div className="leading-9 mt-5 text-white">
          <p className="text-xl">اطلاعات بیشتر</p>
          <div className="w-28 h-1 bg-cyan-500 mx-auto mb-3 rounded-full mt-1"></div>
          <Link href={"#"} className="opacity-60">گزارش باگ</Link>
          <br />
          <Link href={"#"} className="opacity-60">درباره ما</Link>
          <br />
          <Link href={"#"} className="opacity-60">بلاگ</Link>
        </div>
        <div className="leading-9 mt-5 text-white mr-64">
          <p className="text-xl">با ما همراه باشید !</p>
          <div className="w-36 h-1 bg-cyan-500 mx-auto mb-3 rounded-full mt-1 ml-32"></div>
          <div className="flex space-x-4">
            <Link href={"https://instagram.com/saitzoofficial"} target="_blank">
              <Image src={"/instaSupport5.png"} alt="instaLink" height={40} width={40} />
            </Link>
            <Link href={"https://wa.me/989193003137"} target="_blank">
              <Image src={"/whatsappSupport.png"} alt="whatsappLink" height={40} width={40} />
            </Link>
            <Link href={"https://t.me/saitzo"} target="_blank">
              <Image src={"/telegramSupport.png"} alt="telegramLink" height={40} width={40} />
            </Link>
          </div>
          <div className="mt-4">
            <p>
              تماس: <Link href={"tel:+989193003137"}><span className="opacity-60" dir="ltr">+98-919-300-3137</span></Link>
            </p>
            <p>
              ایمیل: <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=contact.saitzo@gmail.com"} target="_blank" className="opacity-60">contact.saitzo@gmail.com</Link>
            </p>
          </div>
        </div>
      </div >
    </div>
  )
}

export default servicesmain