'use client';

import "./globals.css";
import 'material-icons/iconfont/material-icons.css';
import Providers from "@/components/providers/Providers";
import UpdateNotification from "@/components/common/UpdateNotification";
import NoSSR from "@/components/common/NoSSR";
import { useEffect } from "react";

// Metadata and Viewport are removed from here as they are not supported in client components.
// To truly disable SSR, we wrap everything in NoSSR component.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.title = "Flexcoz";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Flexible solution for contract and order management");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Flexible solution for contract and order management";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-montserrat text-gray-900 bg-background dark:text-gray-100 dark:bg-gray-900">
        <NoSSR>
          <Providers>
              {children}
              <UpdateNotification />
          </Providers>
        </NoSSR>
      </body>
    </html>
  );
}
