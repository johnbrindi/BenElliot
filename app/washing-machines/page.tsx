import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { washingMachineProducts } from "@/lib/data";

export default function WashingMachinesPage() {
    return (
        <div>
            <USPBar />
            <Header />

            {/* Split Hero */}
            <section className="cat-hero">
                <div className="cat-hero-content">
                    <span className="cat-hero-badge">Brand New · Tested · Guaranteed</span>
                    <h1>Washing Machines</h1>
                    <p>
                        Discover our range of brand new washing machines from leading global brands.
                        Every machine comes with a 12-month Ben Elliott's warranty and high-performance guarantee.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben I am interested in getting a washer and dryer machine" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.10 AM (1).jpeg"
                        alt="Brand New Washing Machine"
                    />
                </div>
            </section>

            <section className="products-section">
                <div className="products-inner">
                    <ProductGrid products={washingMachineProducts} itemsPerPage={12} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
