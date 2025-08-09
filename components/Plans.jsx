import React from 'react'

function Plans() {
  return (
    <section className="bg-gradient-to-tr from-blue-950 to-black text-white py-20 px-6 border-t border-white/10" dir="rtl">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          کدوم پلن مناسب شماست؟
        </h2>
      </div>
      <div>
        <div className='flex justify-center items-center mt-16' dir='ltr'>
          <div className='w-80  rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white px-5 py-5'>
            <h3 className='text-xl font-bold mb-3 text-center'>پایه</h3>
            <p className="text-sm mb-5 px-5 text-center">مناسب برای پروژه های ساده و کوچک با طراحی های واکنش گرا</p>
            <ul className="text-sm space-y-2 leading-6 text-center">
              <li>✔️ یک صفحه سایت</li>
              <li>✔️ طراحی واکنش‌گرا</li>
              <li>✔️ پشتیبانی اولیه</li>
              <li>✖️ اتصال به شبکه های اجتماعی</li>
              <li>✖️ سئو پایه برای گوگل</li>
              <li>✖️ سرعت بهینه‌شده</li>
              <p dir="rtl">
                سیستم مدیریت محتوا (CMS)
                <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>&nbsp;✖️</span>
              </p>
            </ul>
            <div className='text-center'>
              <button className="duration-200 mt-4 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white">
                انتخاب پلن
              </button>
            </div>
          </div>
          <div className='w-80 px-5 py-5 rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white'>
            <div>
              <h3 className="text-xl font-bold mb-2 text-center">پلن حرفه‌ای</h3>
              <p className="text-sm mb-4 text-center px-5">برای کسب‌وکارهایی که به یک وب‌سایت حرفه‌ای با امکانات کامل نیاز دارند</p>
              <ul className="text-sm space-y-2 leading-6 text-center">
                <li>✔️ طراحی چندصفحه‌ای (تا ۵ صفحه)</li>
                <li>✔️ طراحی کاملاً اختصاصی و ریسپانسیو</li>
                <li>✔️ اتصال به شبکه‌های اجتماعی</li>
                <li>✔️ سئو پایه برای گوگل</li>
                <li>✔️ سرعت بهینه‌شده</li>
                <li>✔️ پشتیبانی کامل تا ۱ ماهه</li>
                <p dir="rtl">
                  سیستم مدیریت محتوا (CMS)
                  <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>&nbsp;✖️</span>
                </p>
              </ul>
            </div>
            <div className='text-center'>
              <button className="duration-200 mt-4 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white">
                انتخاب پلن
              </button>
            </div>
          </div>
          <div className='w-80 px-5 py-5 rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white'>
            <div>
              <h3 className="text-xl font-bold mb-2 text-center">پلن جهش</h3>
              <p className="text-sm mb-4 text-center px-5">برای برندهایی که به دنبال بیشترین امکانات، طراحی ویژه و پشتیبانی حرفه‌ای هستند</p>
              <ul className="text-sm space-y-2 leading-6 text-center">
                <li>✔️ طراحی نامحدود صفحات</li>
                <li>✔️ طراحی اختصاصی سطح بالا با انیمیشن</li>
                <li>✔️ اتصال کامل به شبکه‌های اجتماعی و پیام‌رسان‌ها</li>
                <li>✔️ سئو پیشرفته و آنالیز اولیه</li>
                <li>✔️ بهینه‌سازی عملکرد و سرعت</li>
                <li>✔️ پشتیبانی کامل تا ۳ ماه</li>
                <p dir="rtl">
                  سیستم مدیریت محتوا (CMS)
                  <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>&nbsp; ✔️</span>
                </p>
              </ul>
            </div>
            <div className='text-center'>
              <button className="duration-200 mt-4 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white">
                انتخاب پلن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans
