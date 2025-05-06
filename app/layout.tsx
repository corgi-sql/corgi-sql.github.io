import "@/styles/globals.css";
import type { Metadata } from 'next';
import { Providers } from "./providers";
import clsx from "clsx";
import { fontMono, fontSans } from "@/config/fonts";

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
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-dvh">
            <Navbar />
            <main>
              {children}
            </main>

            <footer className="w-full py-32 flex justify-center items-center">
              <GenaFooterLink />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
