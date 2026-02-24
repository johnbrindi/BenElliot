"use client";

import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export function ProductGrid({ products, itemsPerPage = 8 }: ProductGridProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (products.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 py-8 border-t border-[#e8e0f0]">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-full border border-[#e8e0f0] flex items-center justify-center text-[#6A0DAD] hover:bg-[#6A0DAD] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#6A0DAD]"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === page
                                    ? "bg-[#6A0DAD] text-white"
                                    : "text-[#4c4c6d] hover:bg-[#f8f7fc] border border-transparent hover:border-[#e8e0f0]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-full border border-[#e8e0f0] flex items-center justify-center text-[#6A0DAD] hover:bg-[#6A0DAD] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#6A0DAD]"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
