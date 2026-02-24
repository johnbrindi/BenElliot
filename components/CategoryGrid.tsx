import React from "react";
import { categoryCards } from "@/lib/data";
import Link from "next/link";

export function CategoryGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-8">
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-12 text-center underline decoration-[#b2fce4] decoration-4 underline-offset-8">
                    Discover Our Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categoryCards.map((card, index) => (
                        <Link
                            key={index}
                            href={card.link}
                            className="group flex flex-col bg-white border border-[#e8e0f0] rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:border-[#6A0DAD]"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h4 className="text-lg font-bold text-[#1a1a2e] mb-3">{card.title}</h4>
                                <p className="text-sm text-[#4c4c6d] leading-relaxed mb-6">{card.description}</p>
                                <div className="mt-auto pt-4 border-t border-[#e8e0f0] flex justify-between items-center">
                                    <span className="text-[11px] uppercase tracking-wider text-[#4c4c6d]">Prices from</span>
                                    <strong className="text-lg text-[#6A0DAD]">{card.priceFrom}</strong>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
