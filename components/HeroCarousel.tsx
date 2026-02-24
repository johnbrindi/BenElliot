"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";
import Link from "next/link";

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative h-[600px] overflow-hidden bg-[#1a1a2e]">
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {heroSlides.map((slide, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-20">
                            <div className="max-w-2xl text-white">
                                <h1 className="text-5xl font-bold mb-6 leading-tight">{slide.title}</h1>
                                <p className="text-xl mb-8 leading-relaxed opacity-90">{slide.description}</p>
                                <Link
                                    href={slide.link}
                                    className="inline-flex items-center gap-2 bg-[#6A0DAD] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8B2FCF] transition-all"
                                >
                                    {slide.link.startsWith("/") ? "View Our Range" : "Contact Us Today"}
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all z-10"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all z-10"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${current === index ? "bg-white w-8" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
