"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
    const [query, setQuery] = useState("");
    const useRouterHook = useRouter();

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && query.trim()) {
            useRouterHook.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link href="/" className="logo">
                    {/* Creative "BE" logo mark */}
                    <div className="be-logo-mark">
                        <svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#4A0878" />
                            {/* B */}
                            <text x="4" y="27" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="white">B</text>
                            {/* E — offset, overlapping */}
                            <text x="18" y="27" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#b2fce4">E</text>
                        </svg>
                    </div>
                    <div>
                        <div className="logo-text-main">Ben <span>Elliott's</span></div>
                        <div className="logo-sub">Appliance Specialists</div>
                    </div>
                </Link>

                <div className="search-bar">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" strokeWidth="2" />
                        <path d="M16.5 16.5l4 4" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search appliances…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>

                <div className="header-actions">
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben, I am interested in an appliance. Please can you help me with more information?">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                            <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Contact
                    </a>
                    <Link href="/about-us">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" strokeLinecap="round" />
                        </svg>
                        About
                    </Link>
                </div>
            </div>

            <nav className="site-nav">
                <div className="nav-inner">
                    <Link href="/washing-machines">Washing Machines</Link>
                    <Link href="/washer-dryers">Washer Dryers</Link>
                    <Link href="/tumble-dryers">Tumble Dryers</Link>
                    <Link href="/fridge-freezers">Fridge Freezers</Link>
                    <Link href="/dishwashers">Dishwashers</Link>
                    <Link href="/about-us">About Us</Link>
                </div>
            </nav>
        </header>
    );
}
