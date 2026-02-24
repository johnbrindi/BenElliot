import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1a1a2e] text-white py-20">
            <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-[35px] h-[35px] bg-[#6A0DAD] rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                            </svg>
                        </div>
                        <div className="text-xl font-bold text-white leading-tight">
                            Ben <span className="text-[#8B2FCF]">Elliott's</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        The South's leading refurbished appliance specialist. Quality you can trust, prices you'll love.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#b2fce4]">Shop by Category</h4>
                    <ul className="space-y-4">
                        <li><Link href="/washing-machines" className="text-sm text-gray-400 hover:text-white">Washing Machines</Link></li>
                        <li><Link href="/washer-dryers" className="text-sm text-gray-400 hover:text-white">Washer Dryers</Link></li>
                        <li><Link href="/tumble-dryers" className="text-sm text-gray-400 hover:text-white">Tumble Dryers</Link></li>
                        <li><Link href="/fridge-freezers" className="text-sm text-gray-400 hover:text-white">Fridge Freezers</Link></li>
                        <li><Link href="/dishwashers" className="text-sm text-gray-400 hover:text-white">Dishwashers</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#b2fce4]">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about-us" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
                        <li><Link href="#contact" className="text-sm text-gray-400 hover:text-white">Contact Us</Link></li>
                        <li><Link href="#shipping" className="text-sm text-gray-400 hover:text-white">Shipping Policy</Link></li>
                        <li><Link href="#warranty" className="text-sm text-gray-400 hover:text-white">Warranty Information</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#b2fce4]">Contact Support</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Phone className="w-4 h-4 text-[#b2fce4]" />
                            01234 567 890
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Mail className="w-4 h-4 text-[#b2fce4]" />
                            hello@benelliotts.co.uk
                        </div>
                        <div className="flex items-top gap-3 text-sm text-gray-400">
                            <MapPin className="w-4 h-4 text-[#b2fce4] mt-0.5" />
                            123 Appliance Way,<br />Bournemouth, BH1 1AB
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-8 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 items-center">
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Ben Elliott's Washer Specialists. All Rights Reserved.
                </p>
                <div className="flex items-center gap-4 grayscale opacity-50">
                    <img src="/washing_machine/imgi_3_clearpay-023d7f46.svg" alt="Clearpay" className="h-4" />
                    <img src="/washing_machine/imgi_4_paypal-a7c68b85.svg" alt="Paypal" className="h-4" />
                    <img src="/washing_machine/imgi_5_master-54b5a7ce.svg" alt="Mastercard" className="h-4" />
                    <img src="/washing_machine/imgi_6_visa-65d650f7.svg" alt="Visa" className="h-4" />
                </div>
            </div>
        </footer>
    );
}
