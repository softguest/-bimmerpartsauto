import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getWhatsAppUrl(carName: string, phone: string, email: string): string {
  const ADMIN_PHONE = "17604288912"; // ← Replace with your admin phone number
  const message = `🚗 *New Car Order Request*\n\n📌 Car: ${carName}\n📱 Phone: ${phone}\n📧 Email: ${email}`;
  return `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
}