import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "sonner";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techie LMS",
  description: "Techie LMS Ed-Tech Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.className,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="relative flex min-h-screen flex-col">
              <Suspense fallback={null}>
                <div className="flex-1 flex-grow">{children}</div>
              </Suspense>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
