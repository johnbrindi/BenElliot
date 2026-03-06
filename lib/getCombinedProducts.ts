import { client } from '../sanity/lib/client';
import { washingMachineProducts, washerDryerProducts, tumbleDryerProducts, fridgeFreezerProducts, dishwasherProducts, allProducts, Product } from './data/index';

export async function getSanityProducts(categoryQuery?: string): Promise<Product[]> {
    if (!client || !client.config().projectId || client.config().projectId === "your_project_id_here") {
        return [];
    }

    try {
        const query = categoryQuery
            ? `*[_type == "product" && category == "${categoryQuery}"]{
                "id": _id,
                "name": title,
                "slug": slug.current,
                category,
                price,
                brand,
                description,
                "image": image.asset->url,
                features,
                energyRating,
                capacity,
                spinSpeed,
                colour
            }`
            : `*[_type == "product"]{
                "id": _id,
                "name": title,
                "slug": slug.current,
                category,
                price,
                brand,
                description,
                "image": image.asset->url,
                features,
                energyRating,
                capacity,
                spinSpeed,
                colour
            }`;

        const products = await client.fetch(query, {}, { cache: 'no-store' });
        return products.map((p: any) => ({
            ...p,
            logo: p.brand ? `/brands/${p.brand.toLowerCase()}.png` : '' // Fallback for logo
        }));
    } catch (e) {
        console.error("Error fetching sanity products:", e);
        return [];
    }
}

export async function getCombinedCategoryProducts(categoryName: string, staticProducts: Product[]): Promise<Product[]> {
    const sanityProducts = await getSanityProducts(categoryName);
    return [...sanityProducts, ...staticProducts];
}

export async function getAllCombinedProducts(): Promise<Product[]> {
    const sanityProducts = await getSanityProducts();
    // Use an array of unique slugs / ids to ensure no dupes if needed, or just append
    return [...sanityProducts, ...allProducts];
}

export async function getCombinedProductBySlug(slug: string): Promise<Product | undefined> {
    if (client && client.config().projectId && client.config().projectId !== "your_project_id_here") {
        try {
            const query = `*[_type == "product" && slug.current == "${slug}"][0]{
                "id": _id,
                "name": title,
                "slug": slug.current,
                category,
                price,
                brand,
                description,
                "image": image.asset->url,
                features,
                energyRating,
                capacity,
                spinSpeed,
                colour
            }`;
            const p = await client.fetch(query, {}, { cache: 'no-store' });
            if (p) {
                return {
                    ...p,
                    logo: p.brand ? `/brands/${p.brand.toLowerCase()}.png` : ''
                };
            }
        } catch (e) {
            console.error("Error fetching product by slug:", e);
        }
    }

    return allProducts.find(p => p.slug === slug);
}
