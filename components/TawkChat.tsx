"use client";

import Script from "next/script";

export default function TawkChat() {
  return (
    <Script
      id="tawk-to"
      strategy="afterInteractive"
      src="https://embed.tawk.to/6ab406c24b957f34427b5863/1k37jkqo6"
      crossOrigin="anonymous"
    />
  );
}