import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { tumbleDryerProducts } from "@/lib/data";

export default function TumbleDryersPage() {
    return (
        <div>
            <USPBar />
            <Header />

            {/* Split Hero */}
            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Brand New · Tested · Guaranteed</span>
                    <h1>Tumble Dryers</h1>
                    <p>
                        High-efficiency drying for every home. Browse our brand new tumble dryers
                        from top-tier manufacturers, all backed by our 12-month Ben Elliott's warranty.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.11 AM.jpeg"
                        alt="Brand New Tumble Dryer"
                    />
                </div>
            </section>

            <section className="products-section">
                <div className="products-inner">
                    <ProductGrid products={tumbleDryerProducts} itemsPerPage={12} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
