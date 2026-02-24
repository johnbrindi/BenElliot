import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { washingMachineProducts } from "@/lib/data";

export default function WashingMachinesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <USPBar />
            <Header />

            <main className="flex-grow bg-[#fcfaff]">
                {/* Category Hero */}
                <section className="bg-white py-16 border-b border-[#e8e0f0]">
                    <div className="max-w-[1280px] mx-auto px-8">
                        <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">Refurbished Washing Machines</h1>
                        <p className="text-[#4c4c6d] text-base max-w-2xl leading-relaxed">
                            Explore our range of expertly restored washing machines from top brands like Bosch, Samsung, and Miele. Every machine comes with our 12-month warranty and precision 10-point quality check.
                        </p>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-20">
                    <div className="max-w-[1280px] mx-auto px-8">
                        <ProductGrid products={washingMachineProducts} itemsPerPage={12} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
