// components/services.jsx
"use client";
import React from "react";

const services = [
    {
        title: "سایت شرکتی",
        description:
            "برای کسب‌وکارهایی که به دنبال حضور حرفه‌ای در فضای آنلاین هستند. نمایش خدمات، تماس، درباره ما و ساخت برند.",
    },
    {
        title: "سایت فروشگاهی",
        description:
            "فروش محصولات به صورت آنلاین با سیستم پرداخت، مدیریت سفارش‌ها و طراحی حرفه‌ای برای افزایش فروش.",
    },
    {
        title: "سایت شخصی",
        description:
            "برای فریلنسرها، هنرمندان یا هر کسی که می‌خواهد برند شخصی‌اش را معرفی کند و نمونه‌کار یا رزومه خود را نمایش دهد.",
    },
    {
        title: "سایت نوبت‌دهی",
        description:
            "امکان رزرو نوبت آنلاین برای کلینیک، سالن زیبایی یا هر کسب‌وکار خدماتی که زمان‌بندی دارد.",
    },
    {
        title: "منوی دیجیتال رستوران و کافه",
        description:
            "ساخت منوی آنلاین تعاملی، قابل نمایش در موبایل با امکان بروزرسانی آسان و حتی سفارش آنلاین.",
    },
];

export default function Services() {
    return (
        <div className="bg-linear-to-br from-blue-950 to-black border-b-[1px] border-[#FFFFFF20]">
            <section id="services" className="py-20 px-6" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        خدمات ما
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#FFFFFF10] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                            >
                                <h3 className="text-xl font-semibold text-cyan-600 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-white leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
}
