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

export const allProducts = [
    ...washingMachineProducts,
    ...washerDryerProducts,
    ...tumbleDryerProducts,
    ...fridgeFreezerProducts,
    ...dishwasherProducts
];
