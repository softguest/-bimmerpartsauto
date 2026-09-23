// export interface Car {
//   id: string;
//   name: string;
//   category: CarCategory;
//   description: string;
//   condition: "New" | "Used";
//   price: number;
//   discountedPrice: number;
//   images: string[];
// }

// export type CarCategory =
//   | "SUV"
//   | "Sedan"
//   | "Luxury"
//   | "Sports"
//   | "Electric"
//   | "Hypercar"
//   | "Coupe"
//   | "Convertible";

export interface CarSpecification {
  engine: string;
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  transmission: string;
  drivetrain: string;
  fuelType: string;
  seating: number;
  cargo?: string;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  tagline: string;
  description: string;
  fullDescription: string;
  condition: "New" | "Used";
  year: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  price: number;
  discountedPrice: number;
  images: string[];
  specifications: CarSpecification;
  features: string[];
  highlights: string[];
}

export type CarCategory =
  | "SUV"
  | "Sedan"
  | "Engine"
  | "Electric"
  | "Hypercar"
  | "Coupe"
  | "Convertible";