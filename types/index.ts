export interface Car {
  id: string;
  name: string;
  category: CarCategory;
  description: string;
  condition: "New" | "Used";
  price: number;
  discountedPrice: number;
  images: string[];
}

export type CarCategory =
  | "SUV"
  | "Sedan"
  | "Luxury"
  | "Sports"
  | "Electric"
  | "Hypercar"
  | "Coupe"
  | "Convertible";