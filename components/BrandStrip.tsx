import React from "react";
import { brandCards } from "@/lib/data";

export function BrandStrip() {
    return (
        <div className="bg-[#f8f7fc] py-12 border-y border-[#e8e0f0]">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brandCards.map((brand, index) => (
                    <div
                        key={index}
                        className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${brand.bgImage})` }}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute inset-x-6 bottom-6 flex flex-col items-center">
                            <img src={brand.logo} alt={brand.title} className="h-6 mb-4 object-contain brightness-0 invert" />
                            <div className="text-white text-center">
                                <div className="text-sm font-bold uppercase tracking-widest leading-none mb-1">{brand.title}</div>
                                <div className="text-[10px] opacity-80 uppercase tracking-tighter">{brand.sub}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
