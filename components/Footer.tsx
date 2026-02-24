"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-col about-col">
                    <div className="logo-text-footer">Ben <span>Elliott's</span></div>
                    <p>Your premier destination for brand new washing machines and home appliances. Premium quality, affordable prices, fully warranted.</p>
                </div>

                <div className="footer-col links-col">
                    <h4>Shop</h4>
                    <Link href="/washing-machines">Washing Machines</Link>
                    <Link href="/washer-dryers">Washer Dryers</Link>
                    <Link href="/fridge-freezers">Fridge Freezers</Link>
                    <Link href="/dishwashers">Dishwashers</Link>
                </div>

                <div className="footer-col links-col">
                    <h4>Company</h4>
                    <Link href="/about-us">About Us</Link>
                    <Link href="#contact">Contact</Link>
                    <Link href="/">Home</Link>
                </div>

                <div className="footer-col contact-col">
                    <h4>Get In Touch</h4>
                    <div className="contact-info">
                        <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                                <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            benelliott638@gmail.com
                        </a>
                        <div className="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Available Worldwide<br /><br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-inner">
                    <p>© {new Date().getFullYear()} Ben Elliott's. All rights reserved.</p>
                    <span>Brand New Appliances</span>
                </div>
            </div>
        </footer>
    );
}
