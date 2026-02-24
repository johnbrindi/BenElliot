"use client";

import React, { useState } from "react";
import { ProductCard } from "./ProductCard";

interface Product {
    name: string;
    brand: string;
    logo: string;
    image: string;
    price: string;
}

interface ProductGridProps {
    products: Product[];
    itemsPerPage?: number;
}

export function ProductGrid({ products, itemsPerPage = 12 }: ProductGridProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="collection-grid">
                {currentProducts.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="page-btn"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ‹
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            className={`page-btn${currentPage === page ? " active" : ""}`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="page-btn"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
