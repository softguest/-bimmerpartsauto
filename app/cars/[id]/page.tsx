import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCarById, cars } from "@/data/cars";
import CarDetailClient from "./car-detail-client";
import { div } from "framer-motion/client";

// ✅ Updated type (params is now a Promise)
interface PageProps {
  params: Promise<{ id: string }>;
}

// ✅ Static params (no change needed)
export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

// ✅ Fixed metadata (await params)
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;

  const car = getCarById(id);

  if (!car) {
    return {
      title: "Car Not Found",
    };
  }

  return {
    title: `${car.name} | LUXE MOTORS`,
    description: car.description,
    openGraph: {
      title: `${car.name} | LUXE MOTORS`,
      description: car.description,
      images: [
        {
          url: car.images[0],
        },
      ],
    },
  };
}

// ✅ Fixed page (async + await params)
export default async function CarPage({ params }: PageProps) {
  const { id } = await params;

  const car = getCarById(id);

  if (!car) {
    notFound();
  }

  return (
    <div style={{ background: "linear-gradient(to bottom, #000000, #434343)", padding: "50px 0 100px 0" }} className="relative py-24 sm:py-32 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CarDetailClient car={car} />
      </div>
    </div>
  );
}