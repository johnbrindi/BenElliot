import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { dishwasherProducts } from "@/lib/data";

export default function DishwashersPage() {
    return (
        <div>
            <USPBar />
            <Header />

            {/* Split Hero */}
            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Brand New · Tested · Guaranteed</span>
                    <h1>Dishwashers</h1>
                    <p>
                        Sparkling results every time. Discover brand new dishwashers from leading
                        brands, combining superior cleaning power with incredible value.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.22 AM.jpeg"
                        alt="Brand New Dishwasher"
                    />
                </div>
            </section>

            <section className="products-section">
                <div className="products-inner">
                    <ProductGrid products={dishwasherProducts} itemsPerPage={12} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
