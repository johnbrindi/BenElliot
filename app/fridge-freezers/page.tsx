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

            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Refurbished · Tested · Guaranteed</span>
                    <h1>Fridge Freezers</h1>
                    <p>
                        Keep it cool for less. From American style to integrated models, our refurbished
                        fridge-freezers are rigorously tested for reliability — at a fraction of the retail price.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry about Fridge Freezers&body=Hi Ben, I am interested in a refurbished fridge freezer. Please can you help me with more information?" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.20 AM.jpeg"
                        alt="Refurbished Fridge Freezer"
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
