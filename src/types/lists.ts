import type { ProductInterface } from "./products";

export interface DetailItem {
  title: string;
  value: keyof ProductInterface; // restricts only to keys in ProductData
}

export interface ProductData {
  id: string;
  description: string;
  [key: string]: string | number | boolean | undefined; // allow dynamic fields
}
