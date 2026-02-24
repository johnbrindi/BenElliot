import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Heart, Award, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

const stats = [
    { value: "5,000+", label: "Appliances Supplied" },
    { value: "12 Month", label: "Warranty on Every Item" },
    { value: "Premium", label: "Brand Partnerships" },
    { value: "Top Tier", label: "Quality Standards" },
];

const values = [
    {
        icon: Users,
        title: "Expert Team",
        text: "Our specialist engineers bring years of hands-on experience in selecting and installing premium appliances.",
    },
    {
        icon: Heart,
        title: "Customer First",
        text: "From first enquiry to post-delivery support, we're with you every step of the way.",
    },
    {
        icon: Award,
        title: "Certified Quality",
        text: "Every machine meets our rigorous quality standards before it ever leaves our showroom.",
    },
    {
        icon: CheckCircle,
        title: "Modern Choice",
        text: "We source the latest energy-efficient models to help you reduce your home's environmental impact.",
    },
];

const standards = [
    {
        num: "01",
        title: "Transparency",
        text: "No hidden costs. What you see is what you pay — including a full 12-month warranty on every purchase.",
    },
    {
        num: "02",
        title: "Reliability",
        text: "We only source premium brands known for longevity, so your brand new machine is built to last.",
    },
    {
        num: "03",
        title: "Service",
        text: "From our showroom to your kitchen, we provide professional delivery and expert installation.",
    },
];

export default function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <USPBar />
            <Header />

            <main className="flex-grow">

                {/* ── HERO ── */}
                <section className="about-hero">
                    <div className="about-hero-content">
                        <span className="about-hero-badge">Our Story</span>
                        <h1 className="about-hero-title">
                            Brand New Appliances,<br />
                            <span>Done Right.</span>
                        </h1>
                        <p className="about-hero-sub">
                            Ben Elliott&apos;s was founded on a simple belief — high-quality home appliances shouldn&apos;t cost the earth. We source, test, and deliver with pride.
                        </p>
                        <div className="about-hero-ctas">
                            <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="btn-primary">
                                Enquire Now
                            </a>
                            <Link href="/washing-machines" className="btn-secondary">
                                Browse Appliances
                            </Link>
                        </div>
                    </div>
                    <div className="about-hero-img">
                        <img
                            src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.17 AM.jpeg"
                            alt="Ben Elliott's showroom — brand new appliances"
                        />
                        <div className="about-hero-img-badge">
                            <strong>Est. 2015</strong>
                            <span></span>
                        </div>
                    </div>
                </section>

                {/* ── STATS BAR ── */}
                <div className="about-stats-bar">
                    {stats.map((s, i) => (
                        <div key={i} className="about-stat-item">
                            <span className="about-stat-value">{s.value}</span>
                            <span className="about-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── OUR STORY ── */}
                <section className="about-story-section">
                    <div className="about-story-inner">
                        <div className="about-story-text">
                            <span className="about-section-badge">Quality You Can Trust</span>
                            <h2>Premium Appliances,<br />Superior Value.</h2>
                            <p>
                                We saw a gap in the market for high-quality home appliances delivered with a personal touch. Our team of expert engineers ensures every brand new appliance meets our exacting standards, providing you with high-performance machines from names you trust.
                            </p>
                            <p>
                                We don&apos;t just sell machines — we provide a complete service. Today, we&apos;re proud to be a leading name in brand new appliances, helping thousands of families upgrade their homes while receiving the best value and support in the industry.
                            </p>
                        </div>
                        <div className="about-story-images">
                            <img
                                className="about-story-img-main"
                                src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.10 AM.jpeg"
                                alt="brand new washing machine"
                            />
                            <img
                                className="about-story-img-secondary"
                                src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.11 AM.jpeg"
                                alt="Modern appliance"
                            />
                        </div>
                    </div>
                </section>

                {/* ── VALUES GRID ── */}
                <section className="about-values-section">
                    <div className="about-values-inner">
                        <div className="about-values-header">
                            <span className="about-section-badge">Why Choose Us</span>
                            <h2>Built on values that matter.</h2>
                            <p>Every decision we make is guided by four core principles.</p>
                        </div>
                        <div className="about-values-grid">
                            {values.map((v, i) => (
                                <div key={i} className="about-value-card">
                                    <div className="about-value-icon">
                                        <v.icon size={22} />
                                    </div>
                                    <h4>{v.title}</h4>
                                    <p>{v.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── THE BEN ELLIOTT STANDARD ── */}
                <section className="about-standard-section">
                    <div className="about-standard-inner">
                        <div className="about-standard-header">
                            <span className="about-section-badge-light">Our Commitment</span>
                            <h2>The Ben Elliott&apos;s Standard</h2>
                            <p>Three pillars that set us apart from the rest.</p>
                        </div>
                        <div className="about-standard-grid">
                            {standards.map((s, i) => (
                                <div key={i} className="about-standard-card">
                                    <span className="about-standard-num">{s.num}</span>
                                    <h4>{s.title}</h4>
                                    <p>{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PHOTO STRIP ── */}
                <div className="about-photo-strip">
                    {[
                        "/priority_image/WhatsApp Image 2026-02-23 at 9.53.12 AM.jpeg",
                        "/priority_image/WhatsApp Image 2026-02-23 at 9.53.13 AM.jpeg",
                        "/priority_image/WhatsApp Image 2026-02-23 at 9.53.14 AM.jpeg",
                        "/priority_image/WhatsApp Image 2026-02-23 at 9.53.15 AM.jpeg",
                    ].map((src, i) => (
                        <div key={i} className="about-strip-img">
                            <img src={src} alt={`Ben Elliott's appliance ${i + 1}`} />
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <section className="about-cta-section">
                    <div className="about-cta-inner">
                        <h2>Interested in an appliance?</h2>
                        <p>
                            We believe in personal service. Browse our range, find what you love, and reach out directly — we&apos;ll handle the rest.
                        </p>
                        <div className="about-cta-buttons">
                            <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
                                Enquire via Email
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
