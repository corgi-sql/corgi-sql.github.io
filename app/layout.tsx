import "@/styles/globals.css";
import type { Metadata } from 'next';
import { Providers } from "./providers";

import Navbar from "@/components/GenaNavbar";
import GenaFooterLink from "@/components/GenaFooterLink";

export const metadata: Metadata = {
  title: 'Corgi SQL',
  description: 'Ranking of txt2sql models',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Providers>
          <div className="relative flex flex-col h-dvh">
            <Navbar />
            <main className="container flex-grow mx-auto max-w-7xl px-2 pt-2 sm:px-6 sm:pt-4">
              {children}
            </main>

            <footer className="w-full pt-6 pb-3 flex justify-center items-center">
              <GenaFooterLink />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
