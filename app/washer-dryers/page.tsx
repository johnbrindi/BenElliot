import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { washerDryerProducts } from "@/lib/data";

export default function WasherDryersPage() {
    return (
        <div>
            <USPBar />
            <Header />

            {/* Split Hero */}
            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Brand New · Tested · Guaranteed</span>
                    <h1>Washer Dryers</h1>
                    <p>
                        The ultimate space-saving solution. Our brand new washer dryers combine cutting-edge
                        technology with exceptional value and a full 12-month warranty.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.21 AM.jpeg"
                        alt="Brand New Washer Dryer"
                    />
                </div>
            </section>

            <section className="products-section">
                <div className="products-inner">
                    <ProductGrid products={washerDryerProducts} itemsPerPage={12} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
