"use client";

import Script from "next/script";

export default function TawkChat() {
  return (
    <Script
      id="tawk-to"
      strategy="afterInteractive"
      src="https://embed.tawk.to/6ab3efec8582123445b61ab8/1k37e2da9"
      crossOrigin="anonymous"
    />
  );
}