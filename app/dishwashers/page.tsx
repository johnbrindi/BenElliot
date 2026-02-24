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

            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Refurbished · Tested · Guaranteed</span>
                    <h1>Dishwashers</h1>
                    <p>
                        Say goodbye to washing up for good. Our refurbished dishwashers are fully
                        tested and backed by our 12-month warranty — spotless dishes, serious savings.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry about Dishwashers&body=Hi Ben, I am interested in a refurbished dishwasher. Please can you help me with more information?" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.17 AM (1).jpeg"
                        alt="Refurbished Dishwasher"
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
