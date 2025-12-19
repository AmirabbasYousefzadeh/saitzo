"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function footer() {
  return (
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
  )
}

export default footer
