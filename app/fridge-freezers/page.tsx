import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { fridgeFreezerProducts } from "@/lib/data";

export default function FridgeFreezersPage() {
    return (
        <div>
            <USPBar />
            <Header />

            {/* Split Hero */}
            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Brand New · Tested · Guaranteed</span>
                    <h1>Fridge Freezers</h1>
                    <p>
                        Keep it fresh for less. Our brand new fridge freezers offer premium style
                        and modern features with the peace of mind of a full 1-year guarantee.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.20 AM.jpeg"
                        alt="Brand New Fridge Freezer"
                    />
                </div>
            </section>

            <section className="products-section">
                <div className="products-inner">
                    <ProductGrid products={fridgeFreezerProducts} itemsPerPage={12} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
