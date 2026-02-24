import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { notFound } from "next/navigation";
import { Mail, ShieldCheck, CheckCircle } from "lucide-react";
import {
    washingMachineProducts,
    washerDryerProducts,
    tumbleDryerProducts,
    fridgeFreezerProducts,
    dishwasherProducts,
} from "@/lib/data";

// Pull all products into one flat lookup
const allProducts = [
    ...washingMachineProducts,
    ...washerDryerProducts,
    ...tumbleDryerProducts,
    ...fridgeFreezerProducts,
    ...dishwasherProducts,
];

type Product = (typeof allProducts)[0] & {
    slug: string;
    description?: string;
    features?: string[];
    energyRating?: string;
    capacity?: string;
    spinSpeed?: string;
    colour?: string;
    dimensions?: string;
    category?: string;
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = allProducts.find(
        (p) => (p as Product).slug === params.slug ||
            p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === params.slug
    ) as Product | undefined;

    if (!product) return notFound();

    const related = allProducts
        .filter((p) => p.brand === product.brand && (p as Product).slug !== product.slug)
        .slice(0, 4) as Product[];

    const emailSubject = `Enquiry about: ${product.name}`;
    const emailBody = "Hi Ben I am interested in getting a washer and dryer machine";
    const mailtoHref = `mailto:benelliott638@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const features: string[] = product.features ?? [
        "Brand new premium appliance",
        "Full manufacturer standards met",
        "12-month Ben Elliott's warranty included",
        "Professional delivery available",
        "Pristine condition guaranteed",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <USPBar />
            <Header />

            <main className="flex-grow">

                {/* Main Layout */}
                <div className="detail-layout">
                    {/* Image Column */}
                    <div className="detail-image-col">
                        <img
                            className="detail-main-img"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="detail-badges-row">
                            <div className="detail-badge">
                                <ShieldCheck size={16} style={{ color: "var(--purple)" }} />
                                12-Month Warranty
                            </div>
                            <div className="detail-badge">
                                <CheckCircle size={16} style={{ color: "var(--purple)" }} />
                                Quality Guaranteed
                            </div>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="detail-info-col">
                        <h1 className="detail-product-name">{product.name}</h1>

                        <div className="detail-price-block">
                            <span className="detail-price">{product.price}</span>
                            <span className="detail-price-label">Brand New · VAT included</span>
                        </div>

                        <p className="detail-description">
                            {product.description ??
                                `This brand new appliance from ${product.brand} offers exceptional performance and reliability. It comes complete with a 12-month Ben Elliott's warranty and is ready for delivery to your home.`}
                        </p>

                        {/* Specs Table */}
                        <table className="detail-specs-table">
                            <tbody>
                                {product.energyRating && (
                                    <tr>
                                        <td>Energy Rating</td>
                                        <td>{product.energyRating}</td>
                                    </tr>
                                )}
                                {product.capacity && (
                                    <tr>
                                        <td>Capacity</td>
                                        <td>{product.capacity}</td>
                                    </tr>
                                )}
                                {product.spinSpeed && (
                                    <tr>
                                        <td>Spin Speed</td>
                                        <td>{product.spinSpeed}</td>
                                    </tr>
                                )}
                                {product.colour && (
                                    <tr>
                                        <td>Colour</td>
                                        <td>{product.colour}</td>
                                    </tr>
                                )}
                                {product.dimensions && (
                                    <tr>
                                        <td>Dimensions</td>
                                        <td>{product.dimensions}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Condition</td>
                                    <td>Brand New</td>
                                </tr>
                                <tr>
                                    <td>Warranty</td>
                                    <td>12 Months (Ben Elliott's)</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Features */}
                        <p className="detail-features-title">Key Features</p>
                        <ul className="detail-features-list">
                            {features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="detail-cta-block">
                            <h3>Interested in this appliance?</h3>
                            <p>
                                We believe in personal service — get in touch and we'll
                                help you every step of the way.
                            </p>
                            <a href={mailtoHref} className="detail-cta-btn">
                                <Mail size={18} />
                                Enquire via Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {related.length > 0 && (
                    <div className="detail-related">
                        <div className="detail-related-inner">
                            <h2>You Might Also Like</h2>
                            <div className="collection-grid">
                                {related.map((p, i) => (
                                    <ProductCard key={i} product={p} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
