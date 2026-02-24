"use client";

import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { allProducts } from "@/lib/data";
import { Suspense } from "react";

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";

    const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
    );

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="search-results-layout" style={{ padding: '80px 0', minHeight: '60vh' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>
                        {query ? `Search results for "${query}"` : "Search Our Products"}
                    </h1>
                    <p style={{ color: 'var(--mid)', marginBottom: '40px' }}>
                        Found {results.length} product{results.length === 1 ? '' : 's'} matching your search.
                    </p>

                    {results.length > 0 ? (
                        <div className="products-grid">
                            {results.map((product, idx) => (
                                <ProductCard key={idx} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results" style={{ textAlign: 'center', padding: '100px 0' }}>
                            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔍</div>
                            <h3>No results found</h3>
                            <p>Try searching for something else, like "Washing Machine" or "Bosch".</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading search...</div>}>
            <SearchResults />
        </Suspense>
    );
}
