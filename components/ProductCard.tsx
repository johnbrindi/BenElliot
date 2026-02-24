"use client";

import Link from "next/link";

interface Product {
    name: string;
    brand: string;
    logo: string;
    image: string;
    price: string;
    slug?: string;
    category?: string;
    energyRating?: string;
    capacity?: string;
    spinSpeed?: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const slug = product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const href = `/products/${slug}`;

    return (
        <Link href={href} className="product-card">
            <div className="img-container">
                <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <div className="price-section">
                <span>Prices from</span>
                <strong>{product.price}</strong>
            </div>
            <div className="product-card-enquire">
                Enquire Now →
            </div>
        </Link>
    );
}
