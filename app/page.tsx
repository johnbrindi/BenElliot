import Link from "next/link";
import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";

const testimonials = [
  {
    text: "\"Absolutely brilliant experience. The washing machine arrived in perfect condition — looked and worked like brand new. Fantastic service from Ben Elliott's!\"",
    name: "Mark Thompson",
    role: "Homeowner, Manchester",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&fit=crop&auto=format&face"
  },
  {
    text: "\"Fast delivery and the white-glove installation was worth every penny. Saved over £300 compared to buying new. Highly recommended!\"",
    name: "Emily Richardson",
    role: "First-time buyer, Leeds",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80&fit=crop&auto=format&face"
  },
  {
    text: "\"Great value for money. Ben Elliott's is now my go-to for any home appliance. The Bosch washer has been running perfectly for 8 months.\"",
    name: "James Walker",
    role: "Repeat customer, Birmingham",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&auto=format&face"
  },
  {
    text: "\"I was sceptical about buying refurbished but the quality blew me away. Immaculate machine, brilliant warranty, and incredible price point.\"",
    name: "Sarah Mitchell",
    role: "Family home, Bristol",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fit=crop&auto=format&face"
  },
  {
    text: "\"Ben Elliott's team was incredibly helpful — guided me to the right washer dryer for my flat. Delivered on time, works flawlessly. 10/10.\"",
    name: "Tom Henderson",
    role: "Flat owner, London",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&fit=crop&auto=format&face"
  },
  {
    text: "\"The Samsung fridge freezer is stunning — you'd never know it was refurbished. Friendly staff, speedy delivery. Couldn't be happier.\"",
    name: "Claire Bennett",
    role: "Homeowner, Edinburgh",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&fit=crop&auto=format&face"
  }
];

const categories = [
  {
    href: "/washing-machines",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80&fit=crop&auto=format",
    title: "Washing Machines",
    desc: "Front-loaders & top-loaders from top brands. Achieve laundry perfection without the price tag.",
    price: "£169.00"
  },
  {
    href: "/fridge-freezers",
    img: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.20 AM.jpeg",
    title: "Fridge Freezers",
    desc: "Perfect balance of style and functionality, with top-tier brands and significant savings.",
    price: "£149.00"
  },
  {
    href: "/washer-dryers",
    img: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.21 AM.jpeg",
    title: "Washer Dryers",
    desc: "Space-saving combo machines — wash and dry for a fraction of the cost of buying new.",
    price: "£239.00"
  },
  {
    href: "/dishwashers",
    img: "/priority_image/WhatsApp Image 2026-02-23 at 9.53.22 AM.jpeg",
    title: "Dishwashers",
    desc: "Sparkling clean results every time. Our refurbished dishwashers deliver without compromise.",
    price: "£109.00"
  }
];

// Duplicate testimonials for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export default function HomePage() {
  return (
    <div>
      <USPBar />
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Product Categories */}
      <section className="products-section" id="machines">
        <div className="products-inner">
          <h2 className="section-title">Discover Our Products</h2>
          <div className="products-grid">
            {categories.map((cat, i) => (
              <Link href={cat.href} key={i} className="product-card">
                <div className="img-container">
                  <img src={cat.img} alt={cat.title} />
                </div>
                <div className="product-card-body" style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '16px', color: 'var(--dark)' }}>{cat.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.5, flex: 1 }}>{cat.desc}</p>
                </div>
                <div className="product-card-price" style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--mid)', display: 'block' }}>Prices from</span>
                  <strong style={{ fontSize: '20px', color: 'var(--purple)', fontWeight: 700 }}>{cat.price}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-text">
            <div className="about-label">Who We Are</div>
            <h2>Your premier destination for refurbished washers.</h2>
            <p>At Ben Elliott&apos;s, we have a passion for sustainability and a commitment to the circular economy. Our mission is to give appliances a second life while offering you an affordable alternative on those essential home purchases.</p>
            <p>Every machine is expertly checked, cleaned, and restored by our trained engineers — so you get quality you can trust, at a price that makes sense.</p>
            <a href="#contact" className="btn-primary" style={{ background: '#fff', color: 'var(--purple)' }}>Get in Touch</a>
          </div>
          <div className="about-card">
            <div className="about-feat-items">
              {[
                { icon: "🛡️", title: "12-Month Warranty", sub: "Every appliance guaranteed" },
                { icon: "🔧", title: "10-Point Testing Plan", sub: "Rigorous quality checks" },
                { icon: "♻️", title: "Sustainable Choice", sub: "Reducing appliance waste" },
                { icon: "💰", title: "Save Up to 60%", sub: "Vs. brand new retail price" }
              ].map((feat, i) => (
                <div key={i} className="about-feat-item">
                  <span style={{ fontSize: '28px' }}>{feat.icon}</span>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>{feat.title}</div>
                    <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '13px' }}>{feat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="section-title">Trusted by Homeowners</h2>
          <p className="section-subtitle">Don&apos;t just take our word for it — here&apos;s what our customers say.</p>
          <div className="testi-track-wrap">
            <div className="testi-track">
              {allTestimonials.map((t, i) => (
                <div key={i} className="testi-card">
                  <div className="testi-stars">⭐⭐⭐⭐⭐</div>
                  <p className="testi-text">{t.text}</p>
                  <div className="testi-author">
                    <img className="testi-avatar" src={t.avatar} alt={t.name} />
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <h2 className="section-title">Interested in an Appliance?</h2>
          <p style={{ color: 'var(--mid)', fontSize: '16px', marginBottom: '40px', lineHeight: 1.7 }}>
            We don&apos;t have an online checkout — instead, we believe in personal service. Browse our range, pick what you love, and get in touch directly. We&apos;ll handle the rest.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben, I am interested in an appliance. Please can you help me with more information?" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
              📧 Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
}
