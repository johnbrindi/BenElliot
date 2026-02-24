"use client";

import React from "react";
import Link from "next/link";
import { Search, Mail, User } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-[#e8e0f0]">
            <div className="max-w-[1280px] mx-auto flex items-center gap-8 px-8 py-4">
                <Link href="/" className="logo flex items-center gap-3">
                    <div className="w-[45px] h-[45px] bg-[#6A0DAD] rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[22px] font-bold text-[#6A0DAD] leading-tight tracking-tight">
                            Ben <span className="text-[#4A0878]">Elliott's</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-[#4c4c6d] mt-0.5">
                            Washer Specialists
                        </div>
                    </div>
                </Link>

                <div className="flex-1 max-w-[520px] flex items-center bg-[#f8f7fc] border border-[#e8e0f0] rounded-full px-4 h-11 gap-2.5">
                    <Search className="w-[18px] h-[18px] text-[#4c4c6d]" />
                    <input
                        type="text"
                        placeholder="Search appliances, brands…"
                        className="border-none bg-transparent outline-none text-sm w-full text-[#2d2d2d]"
                    />
                </div>

                <div className="ml-auto flex items-center gap-6">
                    <Link href="#contact" className="flex flex-col items-center gap-1 text-[11px] text-[#2d2d2d] tracking-wide hover:text-[#6A0DAD]">
                        <Mail className="w-[22px] h-[22px] stroke-1" />
                        Contact
                    </Link>
                    <Link href="/about-us" className="flex flex-col items-center gap-1 text-[11px] text-[#2d2d2d] tracking-wide hover:text-[#6A0DAD]">
                        <User className="w-[22px] h-[22px] stroke-1" />
                        About
                    </Link>
                </div>
            </div>

            <nav className="bg-[#f8f7fc] border-t border-[#e8e0f0]">
                <div className="max-w-[1280px] mx-auto px-8 flex items-center">
                    {[
                        { name: "Washing Machines", href: "/washing-machines" },
                        { name: "Washer Dryers", href: "/washer-dryers" },
                        { name: "Tumble Dryers", href: "/tumble-dryers" },
                        { name: "Fridge Freezers", href: "/fridge-freezers" },
                        { name: "Dishwashers", href: "/dishwashers" },
                        { name: "About Us", href: "/about-us" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4.5 py-3 text-[13.5px] font-medium text-[#2d2d2d] border-b-2 border-transparent hover:text-[#6A0DAD] hover:border-[#6A0DAD] whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
