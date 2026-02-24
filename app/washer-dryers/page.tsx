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

            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Refurbished · Tested · Guaranteed</span>
                    <h1>Washer Dryers</h1>
                    <p>
                        The smart space-saving solution. Our refurbished washer-dryers wash and dry
                        in one compact machine — perfect for flats and smaller homes. All fully tested
                        and backed by a 12-month warranty.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry about Washer Dryers&body=Hi Ben, I am interested in a refurbished washer dryer. Please can you help me with more information?" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.21 AM.jpeg"
                        alt="Refurbished Washer Dryer"
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
