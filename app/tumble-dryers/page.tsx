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

            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Refurbished · Tested · Guaranteed</span>
                    <h1>Tumble Dryers</h1>
                    <p>
                        Dry faster, spend less. From heat pump to condenser and vented models,
                        our refurbished tumble dryers are tested and backed by our 12-month guarantee.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry about Tumble Dryers&body=Hi Ben, I am interested in a refurbished tumble dryer. Please can you help me with more information?" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.21 AM (1).jpeg"
                        alt="Refurbished Tumble Dryer"
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
