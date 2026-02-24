import { washingMachineProducts } from "./washing-machines";
import { washerDryerProducts } from "./washer-dryers";
import { tumbleDryerProducts } from "./tumble-dryers";
import { fridgeFreezerProducts } from "./fridge-freezers";
import { dishwasherProducts } from "./dishwashers";

export * from "./washing-machines";
export * from "./washer-dryers";
export * from "./tumble-dryers";
export * from "./fridge-freezers";
export * from "./dishwashers";
export * from "./home-data";

export interface Product {
    name: string;
    brand: string;
    logo: string;
    image: string;
    price: string;
    id?: number;
    slug?: string;
    category?: string;
    colour?: string;
    energyRating?: string;
    capacity?: string;
    spinSpeed?: string;
    description?: string;
    features?: string[];
}

export const allProducts: Product[] = [
    ...washingMachineProducts as Product[],
    ...washerDryerProducts as Product[],
    ...tumbleDryerProducts as Product[],
    ...fridgeFreezerProducts as Product[],
    ...dishwasherProducts as Product[]
];
