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
          <div className='w-80 rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white border-white/10 px-5 py-5 h-[440px]' dir='rtl'>
            <h3 className='text-3xl font-bold mb-3 px-3'>جهش<span className='mr-[120px]' dir='ltr'>Leap</span></h3>
            <p className="text-sm px-3 font-bold">مناسب برای پروژه های شرکتی ساده و کوچک</p>
            <div className='text-center mb-5'>
              <button className="duration-200 mt-4 px-24 py-2 text-white rounded-2xl hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white cursor-pointer">
                انتخاب پلن
              </button>
            </div>
            <ul className="text-sm space-y-2 leading-6 px-3">
              <li>یک صفحه سایت</li>
              <li>طراحی واکنش‌گرا</li>
              <li>پشتیبانی اولیه</li>
              <li>اتصال به شبکه های اجتماعی</li>
              <li>سئو پایه برای گوگل</li>
              <li>سرعت بهینه‌شده</li>
              <li>سیستم مدیریت محتوا (CMS)</li>
            </ul>

          </div>

          <div className='w-80 rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white border-white/10 px-5 py-5 h-[440px]' dir='rtl'>
            <h3 className='text-3xl font-bold mb-3 px-3'>حرفه‌ای<span className='mr-[120px]' dir='ltr'>Pro</span></h3>
            <p className="text-sm px-3 font-bold">مناسب برای پروژه های شرکتی با امکانات</p>
            <div className='text-center mb-5'>
              <button className="duration-200 mt-4 px-24 py-2 text-white rounded-2xl hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white cursor-pointer">
                انتخاب پلن
              </button>
            </div>
            <ul className="text-sm space-y-2 leading-6 px-3">
              <li>یک صفحه سایت</li>
              <li>طراحی واکنش‌گرا</li>
              <li>پشتیبانی کامل تا ۱ ماه</li>
              <li>اتصال به شبکه های اجتماعی</li>
              <li>سئو پایه برای گوگل</li>
              <li>سرعت بهینه‌شده</li>
            </ul>

          </div>

          <div className='w-80  rounded-2xl border-[1px] shadow-blue-900 shadow-2xl border-solid mx-5 text-white border-white/10 px-5 py-5 h-[440px]' dir='rtl'>
            <h3 className='text-3xl font-bold mb-3 px-3'>پایه<span className='mr-36' dir='ltr'>Base</span></h3>
            <p className="text-sm px-3 font-bold">مناسب برای پروژه های شرکتی ساده و کوچک</p>
            <div className='text-center mb-5'>
              <button className="duration-200 mt-4 px-24 py-2 text-white rounded-2xl hover:bg-white hover:text-black active:opacity-70 transition border-2 border-white cursor-pointer">
                انتخاب پلن
              </button>
            </div>
            <ul className="text-sm space-y-2 leading-6 px-3">
              <li>یک صفحه سایت</li>
              <li>طراحی واکنش‌گرا</li>
              <li>پشتیبانی اولیه</li>
              <li>اتصال به شبکه های اجتماعی</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Plans
