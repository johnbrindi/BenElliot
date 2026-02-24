import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BrandStrip } from "@/components/BrandStrip";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Clock, Shield, Star, Wrench, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <USPBar />
      <Header />

      <main className="flex-grow">
        <HeroCarousel />
        <BrandStrip />
        <CategoryGrid />

        {/* About Section */}
        <section className="bg-[#6A0DAD] text-white py-24 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                Who We Are
              </div>
              <h2 className="text-5xl font-bold mb-8 leading-[1.1]">Your premier destination for refurbished washers.</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                At Ben Elliott&apos;s, we have a passion for sustainability and a commitment to the circular economy. Our mission is to give appliances a second life while offering you an affordable alternative on those essential home purchases.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Every machine is expertly checked, cleaned, and restored by our trained engineers — so you get quality you can trust, at a price that makes sense.
              </p>
              <a href="#contact" className="inline-block bg-white text-[#6A0DAD] px-8 py-4 rounded-full font-bold hover:bg-[#F3E8FF] transition-all">
                Get in Touch
              </a>
            </div>

            <div className="flex-1 w-full max-w-[500px]">
              <div className="grid grid-cols-1 gap-5">
                {[
                  { icon: Shield, title: "12-Month Warranty", sub: "Every appliance guaranteed" },
                  { icon: Wrench, title: "10-Point Testing Plan", sub: "Rigorous quality checks" },
                  { icon: CheckCircle, title: "Sustainable Choice", sub: "Reducing appliance waste" },
                  { icon: Clock, title: "Save Up to 60%", sub: "Vs. brand new retail price" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all">
                    <item.icon className="w-8 h-8 text-[#b2fce4]" />
                    <div>
                      <div className="font-bold text-lg">{item.title}</div>
                      <div className="text-sm text-white/60">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#f8f7fc]">
          <div className="max-w-[1280px] mx-auto px-8">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-2 text-center">Trusted by Homeowners</h2>
            <p className="text-[#4c4c6d] text-center mb-16">Don&apos;t just take our word for it — here&apos;s what our customers say.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Mark Thompson", role: "Homeowner, Manchester", text: "Absolutely brilliant experience. The washing machine arrived in perfect condition — looked and worked like brand new. Fantastic service from Ben Elliott's!" },
                { name: "Emily Richardson", role: "First-time buyer, Leeds", text: "Fast delivery and the white-glove installation was worth every penny. Saved over £300 compared to buying new. Highly recommended!" },
                { name: "James Walker", role: "Repeat customer, Birmingham", text: "Great value for money. Ben Elliott's is now my go-to for any home appliance. The Bosch washer has been running perfectly for 8 months." },
                { name: "Sarah Mitchell", role: "Family home, Bristol", text: "I was sceptical about buying refurbished but the quality blew me away. Immaculate machine, brilliant warranty, and incredible price point." }
              ].map((testi, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-[#e8e0f0] shadow-sm flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-[15px] italic text-[#2d2d2d] leading-relaxed mb-8 flex-1">
                    &quot;{testi.text}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-[#f0f0f0]">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-[#6A0DAD] text-sm">
                      {testi.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1a1a2e]">{testi.name}</div>
                      <div className="text-[11px] text-[#4c4c6d] uppercase tracking-wider">{testi.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bar (Bottom) */}
        <section className="bg-[#1a1a2e] py-8 border-b border-white/5">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, text: "1 Year Warranty" },
              { icon: Star, text: "Trusted by Leading Brands" },
              { icon: Wrench, text: "10 Point Testing Plan" },
              { icon: CheckCircle, text: "Highly Trained Engineers" }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 text-white/90 font-medium text-sm tracking-wide uppercase">
                <feature.icon className="w-5 h-5 text-[#b2fce4]" />
                {feature.text}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
