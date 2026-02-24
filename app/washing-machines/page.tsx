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
                    <span className="cat-hero-badge">Refurbished · Tested · Guaranteed</span>
                    <h1>Washing Machines</h1>
                    <p>
                        Expertly restored washing machines, every one passing our 12-month warranty
                        and 10-point quality check. Clean clothes and real savings go hand in hand.
                    </p>
                    <a href="mailto:benelliott638@gmail.com?subject=Enquiry about Washing Machines&body=Hi Ben, I am interested in a refurbished washing machine. Please can you help me with more information?" className="cat-hero-cta">
                        Enquire Now →
                    </a>
                </div>
                <div className="cat-hero-image">
                    <img
                        src="/priority_image/WhatsApp Image 2026-02-23 at 9.53.10 AM (1).jpeg"
                        alt="Refurbished Washing Machine"
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
