import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCarById, cars } from "@/data/cars";
import CarDetailClient from "./car-detail-client";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const car = getCarById(params.id);
  if (!car) return { title: "Car Not Found" };

  return {
    title: `${car.name} | LUXE MOTORS`,
    description: car.description,
    openGraph: {
      title: `${car.name} | LUXE MOTORS`,
      description: car.description,
      images: [{ url: car.images[0] }],
    },
  };
}

export default function CarPage({ params }: PageProps) {
  const car = getCarById(params.id);
  if (!car) notFound();

  return <CarDetailClient car={car} />;
}