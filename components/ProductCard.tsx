import React from "react";

interface ProductCardProps {
    product: {
        name: string;
        brand: string;
        logo: string;
        image: string;
        price: string;
    };
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <a href="#" className="product-card">
            <div className="img-container">
                <img src={product.image} alt={product.name} />
            </div>
            <img src={product.logo} className="vendor-logo" alt={`${product.brand} Logo`} />
            <h3>{product.name}</h3>
            <div className="price-section">
                Prices from <strong>{product.price}</strong>
            </div>
        </a>
    );
}
