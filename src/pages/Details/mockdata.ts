import type { DetailItem } from "../../types/lists";
import type { ProductInterface } from "../../types/products";

export const detailsList: DetailItem[] = [
  {
    title: "City",
    value: "city",
  },
  {
    title: "Subcategory",
    value: "subcategory",
  },
  {
    title: "Delivery",
    value: "delivery",
  },
  {
    title: "Condition",
    value: "condition",
  },
  {
    title: "Barter",
    value: "barter",
  },
];

export const detailsPosted: (keyof ProductInterface)[] = [
  "_id",
  "createdAt",
  "views",
];
