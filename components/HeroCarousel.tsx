"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
    {
        image: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.10 AM.jpeg",
        alt: "Premium Washing Machines",
        title: "Premium Washing Machines",
        desc: "Wash smarter, not harder. Discover our range of refurbished washing machines — efficient, reliable, and unbeatable value.",
        link: "/washing-machines",
        cta: "View Our Range"
    },
    {
        image: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.11 AM.jpeg",
        alt: "Expertly Restored",
        title: "Expertly Restored",
        desc: "Premium brands, expertly restored. Each machine undergoes a rigorous 10-point quality check and comes with a full 12-month warranty.",
        link: "/fridge-freezers",
        cta: "Explore Models"
    },
    {
        image: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.12 AM.jpeg",
        alt: "Save Up to 60%",
        title: "Save Up to 60%",
        desc: "Why pay full price? Our certified refurbished appliances perform like new at a fraction of the cost. Sustainable living starts here.",
        link: "#contact",
        cta: "Contact Us Today"
    },
    {
        image: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.13 AM.jpeg",
        alt: "Laundry Innovation",
        title: "Laundry Innovation",
        desc: "Discover the latest in laundry technology. Efficient, quiet, and designed to fit perfectly into your home.",
        link: "/washer-dryers",
        cta: "View Washer Dryers"
    },
    {
        image: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.14 AM.jpeg",
        alt: "Reliable Performance",
        title: "Reliable Performance",
        desc: "Engineered for excellence. Every appliance we sell is backed by our expert team and a comprehensive 1-year guarantee.",
        link: "/about-us",
        cta: "Who We Are"
    }
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % slides.length);
    }, []);

    const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="hero" id="home">
            <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, i) => (
                    <div className="slide" key={i}>
                        <img src={slide.image} alt={slide.alt} />
                        <div className="slide-overlay">
                            <div className="slide-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.desc}</p>
                                <Link href={slide.link} className="btn-primary">
                                    {slide.cta}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="18" height="18">
                                        <path d="M8 6l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="hero-arrow prev" onClick={prev}>
                <svg viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="hero-arrow next" onClick={next}>
                <svg viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="hero-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`dot${current === i ? " active" : ""}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </section>
    );
}
